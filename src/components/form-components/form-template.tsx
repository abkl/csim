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
const FormTemplate = ({ fields }: { fields: Fields }) => {
  const [modalState, setModalState] = useState(false)
  return (
    <div>
      <Formik
        initialValues={initiallizeFormState(fields)}
        onSubmit={(
          values: { "Event Code"?: string; [s: string]: any },
          actions
        ) => {
          const proxyurl = "https://cors-anywhere.herokuapp.com/"
          function getURL() {
            switch (values["Event Code"]) {
              case "sfr":
                return "https://script.google.com/macros/s/AKfycbxdqDlv5M1Et_yQ4qrANEzwBN0FcrXLQitbKtMYfN84XiKQ_HI4/exec"
              case "svr":
                return "https://script.google.com/macros/s/AKfycbxd9o5VOvlJT4SqTeJTAoUmT9WNxmagGafiTARnFCyU7bgPlcnR/exec"
              default:
                return "https://script.google.com/macros/s/AKfycbw6coSc3fptX7wLepvJ6idwzkEx9uZwxsKMhcfFuWCit-9WZJIO/exec"
            }
          }
          axios
            .post(proxyurl + getURL(), JSON.stringify(values))
            .then(r => console.log(`Request Success ${getURL()}`, r))
            .catch(() => console.log("request failure"))
            .then(() => {
              actions.setSubmitting(false)
              actions.resetForm(initiallizeFormState(fields))
              setModalState(false)
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
            <Button type="button" onClick={() => setModalState(true)}>
              Confirm
            </Button>
            {modalState && (
              <Modal onClose={() => setModalState(false)}>
                <h1> Confirm </h1>
                <DisplayValues values={props.values} />
                {props.isSubmitting ? (
                  <p> loading... </p>
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
