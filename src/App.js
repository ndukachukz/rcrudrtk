import React, { useEffect, useState } from "react";
import "./App.css";
import People from "./components/People";
import {
  useGetPersonByIdQuery,
  useGetPeopleQuery,
  useUpdatePersonMutation,
  useAddPersonMutation,
} from "./store/services/peopleApi";

function App() {
  const [addVal, setAddVal] = useState(null);
  const singlePerson = useGetPersonByIdQuery("1");
  const { data, isLoading, error, refetch } = useGetPeopleQuery();
  const [add, res] = useAddPersonMutation();

  return (
    <div className="App">
      <div>
        <input
          onChange={(e) =>
            setAddVal((prev) => ({
              // id: data?.length + 1,
              ...prev,
              name: e.target.value,
            }))
          }
        />
        <input
          onChange={(e) =>
            setAddVal((prev) => ({
              // id: data?.length + 1,
              ...prev,
              email: e.target.value,
            }))
          }
        />
        <button
          onClick={() => {
            add(addVal);
            refetch();
          }}
        >
          Add Person
        </button>
      </div>
      <People data={data} refetch={refetch} />
    </div>
  );
}

export default App;
