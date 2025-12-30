
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

const Navbar = ({ navigate, refreshList }) => {

  const handleAddPerson = () => {
    navigate("/form");
  };

  const handleViewList = () => {
    refreshList();
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ marginBottom: 4, backgroundColor: "#0d47a1" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <Typography variant="h6" sx={{ cursor: "pointer" }} onClick={handleViewList}>
          Person Management
        </Typography>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", alignItems: "center" }}>
          <Button variant="outlined" color="inherit" onClick={handleAddPerson}>
            Add Person
          </Button>
          <Button variant="outlined" color="inherit" onClick={handleViewList}>
            List
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
