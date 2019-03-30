import React, { useState } from "react"
import { Formik } from "formik"
import Button from "../primatives/button"
import { initiallizeFormState } from "./form-util"
import { css } from "@emotion/core/"
import DisplayFields from "./display-fields"
import { Fields } from "../../utils/game-constants"
import { rhythm } from "../../utils/typography"
import Modal from "../primatives/modal"
import DisplayValues from "./display-values"
import axios from "axios"
import localforage from "localforage"
import uuid from "uuid/v4"

const FormTemplate = ({
  fields,
  submitUrl,
  storageKey,
}: {
  fields: Fields
  submitUrl: string
  storageKey: string
}) => {
  const initialModalState = {
    modalOpen: false,
    error: false,
    showValues: true,
  }
  const [modalState, setModalState] = useState(initialModalState)
  const ModalContent = ({
    isSubmitting,
    values,
  }: {
    isSubmitting: boolean
    values: any
  }) => {
    if (isSubmitting) return <p>loading...</p>
    if (modalState.showValues) return <DisplayValues values={values} />
    if (!modalState.error) return <p> Data submitted!</p>
    if (modalState.error)
      return (
        <p>
          There was an error submitting your form, please try again later(don't
          worry your values are stored in local storage)
        </p>
      )
  }
  return (
    <div>
      <Formik
        initialValues={initiallizeFormState(fields)}
        onSubmit={(
          values: { "Event Code"?: string; [s: string]: any },
          actions
        ) => {
          const proxyurl = "https://cors-app-scouting.herokuapp.com/"
          // function getURL() {
          //   switch (values["Event Code"]) {
          //     case "sfr":
          //       return "https://script.google.com/macros/s/AKfycbxdqDlv5M1Et_yQ4qrANEzwBN0FcrXLQitbKtMYfN84XiKQ_HI4/exec"
          //     case "svr":
          //       return "https://script.google.com/macros/s/AKfycbxd9o5VOvlJT4SqTeJTAoUmT9WNxmagGafiTARnFCyU7bgPlcnR/exec"
          //     default:
          //       return "https://script.google.com/macros/s/AKfycbw6coSc3fptX7wLepvJ6idwzkEx9uZwxsKMhcfFuWCit-9WZJIO/exec"
          //   }
          // }
          axios
            .post(proxyurl + submitUrl, JSON.stringify(values), {
              headers: { "content-type": "json" },
            })
            .then(r => {
              setModalState({ ...modalState, showValues: false })
              localforage.getItem(storageKey, (err, items: any) => {
                if (err) return console.log(err)
                console.log(items)
                if (items === null)
                  return localforage.setItem(storageKey, [
                    { ...values, submitted: true, id: uuid() },
                  ])
                localforage.setItem(storageKey, [
                  ...items,
                  { ...values, submitted: true, id: uuid() },
                ])
              })
            })
            .catch(() => {
              setModalState({ ...modalState, showValues: false, error: true })
              localforage.getItem(storageKey, (err, items: any) => {
                if (err) return console.log(err)
                console.log(items)
                if (items === null)
                  return localforage.setItem(storageKey, [
                    { ...values, submitted: false, id: uuid() },
                  ])
                localforage.setItem(storageKey, [
                  ...items,
                  { ...values, submitted: false, id: uuid() },
                ])
              })
            })
            .then(() => {
              actions.setSubmitting(false)
              actions.resetForm(initiallizeFormState(fields))
            })
        }}
      >
        {props => (
          <form
            onSubmit={props.handleSubmit}
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
            `}
          >
            {Object.keys(fields).map(gamePhase => (
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  width: 100%;
                `}
                key={gamePhase}
              >
                <h2
                  css={css`
                    margin-top: ${rhythm(1)};
                  `}
                >
                  {gamePhase}
                </h2>
                <DisplayFields
                  fields={fields[gamePhase]}
                  setFieldValue={props.setFieldValue}
                  values={props.values}
                />
              </div>
            ))}
            <Button
              type="button"
              onClick={() =>
                setModalState({
                  ...modalState,
                  modalOpen: true,
                  showValues: true,
                })
              }
            >
              Confirm
            </Button>
            {modalState.modalOpen && (
              <Modal
                onClose={() => {
                  if (!props.isSubmitting) {
                    setModalState(initialModalState)
                  }
                }}
              >
                <h1> Confirm </h1>
                <ModalContent
                  isSubmitting={props.isSubmitting}
                  values={props.values}
                />
                {!modalState.showValues ? (
                  <Button onClick={() => setModalState(initialModalState)}>
                    Close
                  </Button>
                ) : (
                  <Button disabled={props.isSubmitting} type="submit">
                    Submit
                  </Button>
                )}
              </Modal>
            )}
          </form>
        )}
      </Formik>
    </div>
  )
}
export default FormTemplate
