import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { NotesContext } from "context/notes";
import { useContext } from "react";

export const SelectComponent = ({ users }) => {
  const { selectedUser, setSelectedUser } = useContext(NotesContext);

  const handleUsernameChange = (event) => {
    setSelectedUser(event.target.value);
  };

  return (
    <FormControl style={{ minWidth: 120, marginLeft: 5, marginBottom: 5 }}>
      <InputLabel id="demo-simple-select-label">Name</InputLabel>
      <Select
        id="demo-simple-select-label"
        value={selectedUser}
        onChange={handleUsernameChange}
        autoComplete="false"
      >
        {users instanceof Array ? (
          users &&
          users?.map((user) => {
            return (
              <MenuItem key={user?.id} value={user?.username}>
                {user?.username}
              </MenuItem>
            );
          })
        ) : (
          <MenuItem key={users?.id} value={users?.username}>
            {users?.username}
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
};
