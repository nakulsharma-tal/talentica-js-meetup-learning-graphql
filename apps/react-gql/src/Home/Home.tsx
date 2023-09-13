import { Box, Button } from "@mui/material";
import ArticlesContainer from "../Articles/ArticlesContainer";
import { useGetAllArticlesQuery } from "../GraphQL/Generated/Apollo";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { data, loading, error } = useGetAllArticlesQuery();

  return (
    <Box>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/create-author");
          }}
        >
          Create Author
        </Button>
        <Button
          variant="outlined"
          sx={{ ml: 2 }}
          onClick={() => {
            navigate("/create-article");
          }}
        >
          Create Article
        </Button>
      </Box>
      <ArticlesContainer isLoading={loading} isError={!!error} articles={data?.allArticles || []} />;
    </Box>
  );
}

export default Home;
