import { useCallback, useState } from "react";

const THEME_KEY = "theme";

const useTheme = () => {
	const [theme, setTheme] = useState(
		() => document.documentElement.getAttribute("data-theme") || "light"
	);

	const toggleTheme = useCallback(() => {
		setTheme((current) => {
			const next = current === "dark" ? "light" : "dark";

			document.documentElement.setAttribute("data-theme", next);
			window.localStorage.setItem(THEME_KEY, next);

			return next;
		});
	}, []);

	return { theme, toggleTheme };
};

export default useTheme;
