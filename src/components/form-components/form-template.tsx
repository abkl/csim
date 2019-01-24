import React, { useState } from "react"
import { Formik } from "formik"
import Button from "../primatives/button"
import { initiallizeFormState, createValidateObject } from "./form-util"
import { css } from "@emotion/core/"
import DisplayFields from "./display-fields"
import { Fields } from "../../utils/game-constants"
import { rhythm } from "../../utils/typography"
import Modal from "../primatives/modal"
import DisplayValues from "./display-values"
import axios from "axios"
export default ({ fields }: { fields: Fields }) => {
  const [modalState, setModalState] = useState(false)
  return (
    <div>
      <Formik
        initialValues={initiallizeFormState(fields)}
        onSubmit={(values, { setSubmitting }) => {
          const proxyurl = "https://cors-anywhere.herokuapp.com/"
          axios
            .post(
              proxyurl +
                "https://script.google.com/macros/s/AKfycbw6coSc3fptX7wLepvJ6idwzkEx9uZwxsKMhcfFuWCit-9WZJIO/exec",
              JSON.stringify(values)
            )
            .then(r => console.log("Request Success", r))
            .catch(() => console.log("request failure"))
          setSubmitting(false)
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
                <Button type="submit"> Submit </Button>
              </Modal>
            )}
          </form>
        )}
      </Formik>
    </div>
  )
}
