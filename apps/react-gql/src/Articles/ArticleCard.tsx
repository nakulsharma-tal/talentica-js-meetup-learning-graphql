import { Card, CardContent, CardHeader, Chip, IconButton } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link } from "react-router-dom";
import { IArticle } from "./IArticle";
import { getFormattedDate } from "./ArticlesUtil";

interface IArticleProps {
  article: IArticle;
}

function ArticleCard(props: IArticleProps) {
  const { article } = props;

  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardHeader
        title={article.title}
        subheader={`${article.author.name} (${getFormattedDate(new Date(article.createdAt))})`}
        action={
          <IconButton>
            <Link to={`/articles/${article.id}`} style={{ color: "black" }}>
              <OpenInNewIcon />
            </Link>
          </IconButton>
        }
      />
      <CardContent>
        {article.tags.map((tag) => {
          return <Chip key={tag} sx={{ mr: "8px", mb: "8px" }} label={tag} />;
        })}
      </CardContent>
    </Card>
  );
}

export default ArticleCard;
