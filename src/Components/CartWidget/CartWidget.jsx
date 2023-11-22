import { Stack, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartWidget = () => {
  return (
    <Stack spacing={2} direction="row" color="black">
      <Badge badgeContent={3} color="success">
        <ShoppingCartIcon />
      </Badge>
    </Stack>
  );
};
