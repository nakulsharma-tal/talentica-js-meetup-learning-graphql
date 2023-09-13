import { Button, Card, CardActions, CardContent, CardHeader, TextField } from "@mui/material";
import { useState } from "react";
import { useCreateAuthorMutation } from "../GraphQL/Generated/Apollo";
import { useNavigate } from "react-router-dom";

function CreateAuthor() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [createAuthorMutation] = useCreateAuthorMutation();

  const createAuthor = () => {
    if (name && name.length > 3) {
      createAuthorMutation({
        variables: {
          name,
        },
        refetchQueries: ["GetAllAuthors"],
      })
        .then(() => {
          navigate("/");
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      setErrorMessage("Name must be at least 3 characters long.");
    }
  };

  return (
    <Card sx={{ m: 5, p: 5 }}>
      <CardHeader title="Create author" />
      <CardContent>
        <TextField
          error={!!errorMessage}
          helperText={errorMessage}
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrorMessage(null);
          }}
        />
      </CardContent>
      <CardActions>
        <Button sx={{ ml: 1 }} size="small" variant="outlined" onClick={createAuthor}>
          Create
        </Button>
      </CardActions>
    </Card>
  );
}

export default CreateAuthor;
