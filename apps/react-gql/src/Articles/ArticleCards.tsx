import { Box, Grid } from "@mui/material";
import ArticleCard from "./ArticleCard";
import { IArticle } from "./IArticle";

export interface IArticleCardsProps {
  articles: Array<IArticle>;
}

function ArticleCards(props: IArticleCardsProps) {
  const { articles } = props;

  if (articles.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ alignSelf: "center" }}>No matching articles found!</Box>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} alignItems="stretch">
        {articles.map((article) => {
          return (
            <Grid item xs={1} sm={2} md={3} key={article.title}>
              <ArticleCard article={article} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ArticleCards;
