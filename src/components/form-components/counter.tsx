import React from "react"
import Button from "../primatives/button"
import css from "@emotion/css"
import { MdArrowUpward, MdArrowDownward } from "react-icons/md"
interface CounterProps {
  setFieldValue: (field: string, value: any) => void
  name: string
  values: {
    [s: string]: string
  }
  dropped: boolean
}
function Grouping({ setFieldValue, values, dropped, name }: CounterProps) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        text-align: left;
      `}
    >
      <label css={{ fontWeight: "bold" }}>
        {dropped ? "Dropped:" : "Scored"}
      </label>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          width: 60%;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 50px;
            height: 84.5px;
          `}
        >
          <Button
            type="button"
            onClick={() =>
              parseInt(values[name]) >= 0
                ? setFieldValue(name, parseInt(values[name]) + 1)
                : ""
            }
            css={css`
              border-radius: 9px 9px 0 0;
              border-bottom-width: 0.5px;
            `}
          >
            <MdArrowUpward />
          </Button>

          <Button
            type="button"
            onClick={() =>
              parseInt(values[name])
                ? setFieldValue(name, parseInt(values[name]) - 1)
                : ""
            }
            css={css`
              border-radius: 0 0 9px 9px;
              border-top-width: 0.5px;
            `}
          >
            <MdArrowDownward />
          </Button>
        </div>
        <label css={{ alignSelf: "center", justifySelf: "flex-end" }}>
          {values[name] ? values[name] : 0}
        </label>
      </div>
    </div>
  )
}
export default function Counter(props: CounterProps) {
  const { name, setFieldValue, values, dropped } = props
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        borderWidth: "5px",
        paddingBottom: "5%",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "300px",
        width: "100%",
        alignSelf: "center",
        textAlign: "left",
      }}
    >
      <label css={{ alignSelf: "flex-start" }}>{name}:</label>
      {dropped ? (
        <div
          css={css`
            display: flex;
            flex-direction: row;
            width: 70%;
            max-width: 300px;
          `}
        >
          <Grouping {...props} dropped={false} />
          <Grouping {...props} name={`${name} dropped`} />
        </div>
      ) : (
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 50%;
            max-width: 160px;
          `}
        >
          <Button
            type="button"
            onClick={() =>
              parseInt(values[name]) >= 0
                ? setFieldValue(name, parseInt(values[name]) + 1)
                : ""
            }
          >
            +
          </Button>
          <label css={{ textAlign: "center", alignSelf: "center" }}>
            {values[name] ? values[name] : 0}
          </label>
          <Button
            type="button"
            onClick={() =>
              parseInt(values[name])
                ? setFieldValue(name, parseInt(values[name]) - 1)
                : ""
            }
          >
            -
          </Button>
        </div>
      )}
      <br />
    </div>
  )
}
