import { useNavigate, useParams } from "react-router-dom";
import { Box, Card, CardContent, CardHeader, Chip, CircularProgress, IconButton, Link, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useArticleQuery, useDeleteArticleMutation } from "../GraphQL/Generated/Apollo";
import { getFormattedDate } from "./ArticlesUtil";
import { IArticle } from "./IArticle";

function Article() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useArticleQuery({ variables: { id: id || "NOT_SET" } });
  const [deleteArticleMutation] = useDeleteArticleMutation();

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

  const handleDelete = () => {
    deleteArticleMutation({
      variables: {
        id: id || "NOT_SET",
      },
      refetchQueries: ["GetAllArticles"],
    })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Card sx={{ m: "4ch", p: "2ch" }}>
      <CardHeader
        title={(data?.article as IArticle)?.title || ""}
        subheader={`${(data?.article as IArticle)?.author.name} (${getFormattedDate(
          new Date((data?.article as IArticle)?.createdAt || "")
        )})`}
        action={
          <IconButton onClick={handleDelete}>
            <DeleteIcon color="error" />
          </IconButton>
        }
      />
      <CardContent>
        <Box sx={{ mb: "2ch" }}>
          {(data?.article as IArticle)?.tags.map((tag) => {
            return <Chip key={tag} sx={{ mr: "8px", mb: "8px" }} label={tag} />;
          })}
        </Box>

        <Box
          dangerouslySetInnerHTML={{
            __html: (data?.article as IArticle)?.description || "",
          }}
        ></Box>

        <Box sx={{ mt: "2ch" }}>
          {(data?.article as IArticle).urls && (data?.article as IArticle).urls.length && (
            <>
              <Typography component="span" variant="h6" sx={{ mt: "2ch" }}>
                Read More
              </Typography>
              <ul>
                {(data?.article as IArticle).urls.map((url) => {
                  return (
                    <li key={url}>
                      <Link href={url} target="_blank" rel="noreferrer">
                        {url}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default Article;
