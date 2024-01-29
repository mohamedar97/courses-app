import { useTranslations } from "next-intl";
import Typography from "@mui/material/Typography";
import AppHeader from "@/components/AppHeader";

const Homepage = () => {
  const t = useTranslations("Index");
  return (
    <>
      <AppHeader />
      <Typography variant="h1">{t("title")}</Typography>
    </>
  );
};

export default Homepage;
