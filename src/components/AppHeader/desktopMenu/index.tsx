import Grid from "@mui/material/Grid";
import LeftSection from "./leftSection";
import MiddleSection from "./middleSection";
import RightSection from "./rightSection";
interface DesktopMenuProps {
  pages: string[];
}
const DesktopMenu: React.FC<DesktopMenuProps> = ({ pages }) => {
  return (
    <>
      <Grid
        sx={{
          display: { xs: "none", md: "flex" },
        }}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <LeftSection />
        </Grid>
        <Grid item>
          <MiddleSection pages={pages} />
        </Grid>
        <Grid item>
          <RightSection />
        </Grid>
      </Grid>
    </>
  );
};

export default DesktopMenu;
