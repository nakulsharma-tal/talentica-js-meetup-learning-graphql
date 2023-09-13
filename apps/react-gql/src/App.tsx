import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Article from "./Articles/Article";
import CreateAuthor from "./Authors/CreateAuthor";
import CreateArticle from "./Articles/CreateArticle";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/create-author" element={<CreateAuthor />} />
          <Route path="/create-article" element={<CreateArticle />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
