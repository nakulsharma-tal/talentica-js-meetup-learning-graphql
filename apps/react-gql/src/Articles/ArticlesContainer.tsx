import { Box, CircularProgress, Typography } from "@mui/material";
import ArticleCards from "./ArticleCards";
import { IArticle } from "./IArticle";

export interface IArticlesContainerProps {
  isLoading: boolean;
  isError: boolean;
  articles: Array<IArticle>;
}

function ArticlesContainer(props: IArticlesContainerProps) {
  const { isLoading, isError, articles } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <CircularProgress sx={{ alignSelf: "center" }} />
      ) : isError ? (
        <Typography component="span" color="error">
          Could not fetch the articles, please try again!
        </Typography>
      ) : (
        <ArticleCards articles={articles} />
      )}
    </Box>
  );
}

export default ArticlesContainer;
