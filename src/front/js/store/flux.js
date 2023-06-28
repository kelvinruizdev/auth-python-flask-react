const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: localStorage.getItem("token") || null,
			login: false
		},
		actions: {
			// Use getActions to call a function within a fuction

			login: async (data) => {
				let store = getStore()
				try {
					let response = await fetch(`${process.env.BACKEND_URL}/login`, {
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify(data)
					})
					let responseData = await response.json();
					setStore({
						token: responseData.token,
					});
					localStorage.setItem("token", responseData.token);
					store.login = true
				} catch (err) {
					console.log(err)
				}
			},

			register: async (data) => {
				try {
					let response = await fetch(`${process.env.BACKEND_URL}/signup`, {
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify(data)
					})
				} catch (err) {
					console.log(err)
				}
			},

			logout: () => {
				try {
					localStorage.removeItem('token');
				} catch (err) {
					console.log(err)
				}
			}

		}
	};
};

export default getState;
