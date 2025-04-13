import { useState } from "react";

const Attendee = ({ attendee, index, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [attendeeName, setAttendeeName] = useState(attendee);

  return (
    <div className="flex justify-between items-center border border-gray-200 rounded-md my-2">
      {isEditing ? (
        <input
          type="text"
          className="my-2 border border-gray-200 px-3 py-2 rounded-md w-75"
          placeholder="Enter attendee name e.g. John Doe"
          value={attendeeName}
          onChange={(e) => setAttendeeName(e.target.value)}
          onBlur={() => setIsEditing(false)}
        />
      ) : (
        <p className="my-2 px-3 py-2">{attendee}</p>
      )}

      <div className="mx-4">
        {/* Save onClick needs to be implemented in the back-end / user needs to be able to save it permanently. */}
        {isEditing ? (
          <i className="fa-solid fa-floppy-disk mr-4 cursor-pointer text-xl" onClick={() => setIsEditing(false)}></i>
        ) : (
          <i class="fa-solid fa-pencil mr-4 cursor-pointer text-xl" onClick={() => setIsEditing(true)}></i>
        )}

        {/* Delete onClick needs to be implemented in the back-end , I only made it delete from the state for now for testing purposes / user needs to be able to delete it permanently. */}
        {isEditing ? (
          <i className="fa-solid fa-xmark cursor-pointer text-xl" onClick={() => setIsEditing(false)}></i>
        ) : (
          <i className="fa-solid fa-trash cursor-pointer text-xl" onClick={() => handleDelete(index)}></i>
        )}
      </div>
    </div>
  );
};

export default Attendee;
