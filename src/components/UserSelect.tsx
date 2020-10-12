import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { NotesContext } from "context/notes";
import { Notes_notes_user } from "queries/__generated__/Notes";
import { ChangeEvent, useContext } from "react";

type SelectComponentProps = Array<Notes_notes_user> | Notes_notes_user;

export const SelectComponent = ({ users }: { users?: SelectComponentProps }): JSX.Element => {
  const { selectedUser, setSelectedUser } = useContext(NotesContext);

  const handleUsernameChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedUser(event.target.value as string);
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
