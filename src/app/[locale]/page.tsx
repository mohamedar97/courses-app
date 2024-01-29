import { useTranslations } from "next-intl";
import Typography from "@mui/material/Typography";

const Homepage = () => {
  const t = useTranslations("Index");
  return (
    <>
      <Typography variant="h1">{t("title")}</Typography>
    </>
  );
};

export default Homepage;
