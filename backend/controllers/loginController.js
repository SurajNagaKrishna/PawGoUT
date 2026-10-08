export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        // query
        // inside if
        req.session.user = {
            email
        };
        res.status(200).json({
            success: true,
            message: "User logged in successfully"
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};
