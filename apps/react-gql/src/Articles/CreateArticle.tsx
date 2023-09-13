import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateArticleMutation, useGetAllAuthorsQuery } from "../GraphQL/Generated/Apollo";

function CreateArticle() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const { data: allAuthors, loading, error } = useGetAllAuthorsQuery();
  const [createArticleMutation] = useCreateArticleMutation();

  if (loading) {
    return <CircularProgress sx={{ display: "flex", alignSelf: "center", margin: "auto", mt: "5ch" }} />;
  }

  if (error) {
    return (
      <Typography
        component="span"
        sx={{
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          margin: "auto",
          mt: "5ch",
        }}
        color="error"
      >
        {error.message}
      </Typography>
    );
  }

  const createArticle = (fieldValues: { title: string; description: string; tags: string; urls: string; authorId: string }) => {
    createArticleMutation({
      variables: {
        input: {
          title: fieldValues.title,
          description: fieldValues.description,
          tags: fieldValues.tags.split(","),
          urls: fieldValues.urls.split(","),
          authorId: fieldValues.authorId,
        },
      },
      refetchQueries: ["GetAllArticles"],
    })
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <Card sx={{ m: 5, p: 5 }}>
      <CardHeader title="Create article" />
      <CardContent>
        <FormGroup>
          <FormControl sx={{ mb: 2 }}>
            <InputLabel id="author-select-label">Author</InputLabel>
            <Select
              labelId="author-select-label"
              label="Author"
              defaultValue={allAuthors?.allAuthors[0].id}
              {...register("authorId", { required: true })}
            >
              {allAuthors?.allAuthors.map((author) => {
                return (
                  <MenuItem key={author.id} value={author.id}>
                    {author.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <TextField sx={{ mb: 2 }} label="title" variant="outlined" defaultValue="" {...register("title", { required: true })} />
          <TextField
            sx={{ mb: 2 }}
            label="description"
            variant="outlined"
            defaultValue=""
            {...register("description", { required: true })}
          />
          <TextField
            sx={{ mb: 2 }}
            label="tags"
            variant="outlined"
            defaultValue=""
            helperText="Enter comma separated tags."
            {...register("tags", { required: true })}
          />
          <TextField
            sx={{ mb: 2 }}
            label="urls"
            variant="outlined"
            defaultValue=""
            helperText="Enter comma separated urls."
            {...register("urls", { required: true })}
          />
        </FormGroup>
      </CardContent>
      <CardActions>
        <Button
          sx={{ ml: 1 }}
          size="small"
          variant="outlined"
          onClick={handleSubmit((fieldValues) => createArticle(fieldValues as never))}
        >
          Create
        </Button>
      </CardActions>
    </Card>
  );
}

export default CreateArticle;
