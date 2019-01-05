import React from "react"
import Counter from "./counter"
import { Formik, Field, FieldProps } from "formik"
import Button from "../button"
import { initiallizeFormState, createValidateObject } from "./form-util"
export const DisplayFormikState = (props: Object) => (
  <div css={{ margin: "1rem 0" }}>
    <h3 css={{ fontFamily: "monospace" }} />
    <pre
      css={{
        background: "#f6f8fa",
        fontSize: ".65rem",
        padding: ".5rem",
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
)
export const DisplayFields = (props: {
  fields: string[]
  setFieldValue: (field: string, value: any) => void
  values: any
}) => (
  <>
    {props.fields.map(field => {
      if (/^Number/.test(field)) {
        return (
          <Counter
            name={field}
            onChange={value => props.setFieldValue(field, value)}
            value={props.values[field]}
            key={field}
          />
        )
      } else if (/Cross/.test(field) || /Climb/.test(field)) {
        return (
          <Field
            component={DisplayRadio}
            name={field}
            options={["yes", "no"]}
            key={field}
          />
        )
      } else {
        return <Field key={field} name={field} placeholder={field} />
      }
    })}
  </>
)
export const DisplayRadio = (props: FieldProps & { options: string[] }) => (
  <div>
    <h3>{props.field.name}</h3>
    {props.options.map((option, index) => (
      <React.Fragment key={option}>
        <input
          onChange={props.field.onChange}
          name={props.field.name}
          value={option}
          type="radio"
        />
        {option} <br />
      </React.Fragment>
    ))}
  </div>
)
export default ({ fields }: { fields: string[] }) => (
  <div>
    <Formik
      initialValues={initiallizeFormState(fields)}
      onSubmit={(values, { setSubmitting }) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        console.log(JSON.stringify(values))
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
      validationSchema={createValidateObject(fields)}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <h2>Sandstorm</h2>
          <hr />
          <Field name="Scouter Name" placeholder="Scouter Name" />
          <DisplayFields
            fields={fields.filter(field => /Sandstorm/.test(field))}
            setFieldValue={props.setFieldValue}
            values={props.values}
          />
          <Field
            component={DisplayRadio}
            name="Starting Platform"
            options={["Level", "Non-level"]}
          />
          <br />
          <h2>Tele-Operated</h2>
          <hr />
          <DisplayFields
            fields={fields.filter(field => /Teleop/.test(field))}
            setFieldValue={props.setFieldValue}
            values={props.values}
          />
          <Field
            component={DisplayRadio}
            name="Sandstorm Climb"
            options={["Level 1", "Level 2", "Level 3"]}
          />
          <br />
          <h2>End Game</h2>
          <hr />
          <Field
            component={DisplayRadio}
            name="Hab Docking"
            options={["yes", "no"]}
          />
          <Field
            component={DisplayRadio}
            name="Complete Rocket"
            options={["yes", "no"]}
          />
          <Field
            component={DisplayRadio}
            name="Robot Deadtime"
            options={[
              "Robot Never Dead",
              "Robot Dead for Less than 30 Seconds",
              "Robot Dead for more than 30 seconds",
            ]}
          />
          <Field component="textarea" name="Comments" placeholder="comments" />
          <br />
          <Button type="submit" disabled={props.isSubmitting}>
            Submit
          </Button>
          <DisplayFormikState {...props} />
        </form>
      )}
    </Formik>
  </div>
)
