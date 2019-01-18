import React, { useState } from "react"
import { Formik } from "formik"
import Button from "../primatives/button"
import { initiallizeFormState, createValidateObject } from "./form-util"
import { css } from "@emotion/core/"
import DisplayFields from "./display-fields"
import { Fields } from "../../utils/game-constants"
import { rhythm } from "../../utils/typography"
import Modal from "../primatives/modal"

export default ({ fields }: { fields: Fields }) => {
  const [modalState, setModalState] = useState(false)
  return (
    <div>
      <Formik
        initialValues={initiallizeFormState(fields)}
        onSubmit={(values, { setSubmitting }) => {
          const proxyurl = "https://cors-anywhere.herokuapp.com/"
          fetch(
            proxyurl +
              "https://script.google.com/macros/s/AKfycbw6coSc3fptX7wLepvJ6idwzkEx9uZwxsKMhcfFuWCit-9WZJIO/exec",
            {
              method: "POST",
              body: JSON.stringify(values),
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
            .then(r => console.log("Request Success", r))
            .catch(r => console.log("request failure"))
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
              <Modal
                title="hello"
                values={props.values}
                onClose={() => setModalState(false)}
              />
            )}
          </form>
        )}
      </Formik>
    </div>
  )
}
