import { Box } from "@mui/material";
import React from "react";

const FeatureIconTag = ({ text }) =>
{
    return (
        <Box
            sx={{
                position: 'absolute',
                top: '20.5px',
                left: '20.5px',  // Now it correctly places the tag in the top-left corner
                zIndex: '100',
                height: '32px',
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                borderRadius: "28px",
                color: "white",
                textTransform: 'uppercase',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: "0px 16px", // Adds spacing inside the tag
                fontSize: 12,
                fontWeight: '500'
            }}
        >
            {text}
        </Box>
    );
};

export default FeatureIconTag;
