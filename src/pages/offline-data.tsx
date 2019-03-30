import React, { useEffect, useState } from "react"
import localforage from "localforage"
import Button from "../components/primatives/button"
import ReactTable from "react-table"
import "react-table/react-table.css"
import axios from "axios"
import Modal from "../components/primatives/modal"
const proxyurl = "https://cors-app-scouting.herokuapp.com/"
const matchScoutUrl =
  "https://script.google.com/macros/s/AKfycbxd9o5VOvlJT4SqTeJTAoUmT9WNxmagGafiTARnFCyU7bgPlcnR/exec"
const pitScoutUrl =
  "https://script.google.com/macros/s/AKfycbzpOJMML-rkyz_HB-GRstlAke0OayBeMEFVW21a04lpD9TJrKc/exec"
const updateStorage = async (key: string, data: { [s: string]: any }) => {
  const ogData = await localforage.getItem(key)
  if (Array.isArray(ogData))
    localforage
      .setItem(
        key,
        ogData.map(v => (v.id === data.id ? { ...data, submitted: true } : v))
      )
      .then(t => console.log(t))
}
export default function OfflinePage() {
  const [items, setItems] = useState({
    matchScout: [],
    pitScout: [],
  })
  const fetchData = async () => {
    const matchScoutData = await localforage.getItem("match-scouting")
    const pitScoutData = await localforage.getItem("pit-scouting")
    setItems({
      matchScout: matchScoutData ? (matchScoutData as any[]) : [],
      pitScout: pitScoutData ? (pitScoutData as any[]) : [],
    })
  }
  const [modalState, setModalState] = useState({
    error: false,
    modalOpen: false,
    loading: false,
  })
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <h1>All the data you've ever submitted</h1>
      <h2> Pitscouting </h2>
      {console.log(items.matchScout)}
      {Array.isArray(items.matchScout) ? (
        <ReactTable
          data={items.pitScout.filter(t => t !== null)}
          pageSize={10}
          columns={[
            {
              Header: "(re)Submit",
              Cell({ original }: { original: any }) {
                return (
                  <Button
                    onClick={() => {
                      console.log("doing stuff")
                      setModalState({
                        modalOpen: true,
                        loading: true,
                        error: false,
                      })
                      axios
                        .post(
                          proxyurl + pitScoutUrl,
                          JSON.stringify(original),
                          {
                            headers: { "content-type": "json" },
                          }
                        )
                        .then(() => {
                          console.log("updating storage")
                          updateStorage("pit-scouting", original)
                            .then(() =>
                              setModalState({
                                modalOpen: true,
                                loading: false,
                                error: false,
                              })
                            )
                            .then(() => fetchData())
                        })
                        .catch(() =>
                          setModalState({
                            modalOpen: true,
                            loading: false,
                            error: true,
                          })
                        )
                    }}
                  >
                    Submit
                  </Button>
                )
              },
            },
            { Header: "Team Number", accessor: "Team Number" },
            {
              Header: "Submitted",
              accessor: "submitted",
              Cell(props: { value: any }) {
                return <p>{props.value.toString()}</p>
              },
            },
          ]}
        />
      ) : (
        "none"
      )}
      <h2> Match Scouting </h2>
      {Array.isArray(items.matchScout) ? (
        <ReactTable
          data={items.matchScout.filter(t => t !== null)}
          pageSize={10}
          columns={[
            {
              Header: "(re)Submit",
              Cell({ original }: { original: any }) {
                return (
                  <Button
                    onClick={() => {
                      console.log("doing stuff")
                      setModalState({
                        modalOpen: true,
                        loading: true,
                        error: false,
                      })
                      axios
                        .post(
                          proxyurl + matchScoutUrl,
                          JSON.stringify(original),
                          {
                            headers: { "content-type": "json" },
                          }
                        )
                        .then(() => {
                          console.log("updating storage")
                          updateStorage("match-scouting", original)
                            .then(() =>
                              setModalState({
                                modalOpen: true,
                                loading: false,
                                error: false,
                              })
                            )
                            .then(() => fetchData())
                        })
                        .catch(() =>
                          setModalState({
                            modalOpen: true,
                            loading: false,
                            error: true,
                          })
                        )
                    }}
                  >
                    Submit
                  </Button>
                )
              },
            },
            { Header: "Team Number", accessor: "Team Number" },
            { Header: "Match Number", accessor: "Match Number" },
            {
              Header: "Submitted",
              accessor: "submitted",
              Cell(props: { value: any }) {
                return <p>{props.value.toString()}</p>
              },
            },
          ]}
        />
      ) : (
        "none"
      )}
      {modalState.modalOpen && (
        <Modal
          onClose={() =>
            setModalState({ error: false, modalOpen: false, loading: false })
          }
        >
          <h1> Submitting</h1>
          <p>
            {!modalState.error && !modalState.loading ? "Data summitted!" : ""}
          </p>
          <p>{modalState.loading ? "loading...." : ""}</p>
          <p>{modalState.error ? "error! please try again later" : ""}</p>
        </Modal>
      )}
    </>
  )
}
