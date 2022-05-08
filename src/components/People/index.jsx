import React, { useState } from "react";
import {
  useDeletePersonMutation,
  useUpdatePersonMutation,
} from "../../store/services/peopleApi";
export default ({ data, refetch }) => {
  const [updateVal, setUpdateVal] = useState("");
  const [update, result] = useUpdatePersonMutation();
  const [del, delRes] = useDeletePersonMutation();

  console.log("RESULT =>", result?.data);
  console.log("DelRes =>", delRes?.data);
  return (
    <div>
      {data?.map((user) => (
        <div
          key={user.id}
          style={{
            marginBottom: 15,
          }}
        >
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
          <div
            style={{
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            <input
              type="text"
              onChange={(e) => {
                const val = e.target.value;
                setUpdateVal(val);
              }}
            />

            <button
              onClick={() => {
                {
                  update({ id: user.id, patch: { name: updateVal } });
                  refetch();
                }
              }}
            >
              update
            </button>
            <button
              onClick={() => {
                del(user?.id);
                refetch();
              }}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
