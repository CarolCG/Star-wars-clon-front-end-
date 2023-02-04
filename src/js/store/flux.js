const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            characters: [],
            vehicles: [],
            planets: [],
            favorites: [],
            detallesCharacters: {},
            detallesPlanets: {},
            detallesVehicles: {},
            auth: false,
            visually: "",
            hide: "visually-hidden"
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            agregarFavorito: (item) => {
                let store = getStore()
                if (store.favorites.includes(item)) {
                    getActions().eliminarFavorito(item);
                } else {
                    setStore({
                        favorites: [...store.favorites, item],
                    }, )
                }
            },
            eliminarFavorito: (item) => {
                let store = getStore()
                setStore({
                    favorites: store.favorites.filter((elemento) => elemento !== item)
                })
            },
            obtenerVehicle: () => {
                fetch("https://swapi.dev/api/vehicles/")
                    .then(res => res.json())
                    .then(data => setStore({
                        vehicles: data.results
                    }))
                    .catch(err => console.error(err))
            },
            obtenerPlanets: () => {
                fetch("https://swapi.dev/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({
                        planets: data.results
                    }))
                    .catch(err => console.error(err))
            },
            obtenerCharacters: () => {
                fetch("https://swapi.dev/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({
                        characters: data.results
                    }))
                    .catch(err => console.error(err))
            },
            obtenerInformationDeCharacter: (id) => {
                fetch("https://swapi.dev/api/people/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        detallesCharacters: data
                    }))
                    .catch(err => console.error(err))
            },
            obtenerInformationDePlanet: (id) => {
                fetch("https://swapi.dev/api/planets/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        detallesPlanets: data
                    }))
                    .catch(err => console.error(err))
            },
            obtenerInformationDeVehicle: (id) => {
                fetch("https://swapi.dev/api/vehicles/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        detallesVehicles: data
                    }))
                    .catch(err => console.error(err))
            },
            obtenerCharacters2: (item) => {
                let store = getStore()
                if (item.url.includes("people")) {
                    return "single/";
                } else if (item.url.includes("planets")) {
                    return "singlePlanet/"
                } else {
                    return "singleVehicle/"
                }
            },
            logout: () => {
                localStorage.removeItem('token');
                setStore({
                    auth: false,
                    visually: "",
                    hide: "visually-hidden"
                })
            },
            login: (userEmail, userPassword) => {
                try {
                    fetch('https://3000-carolcg-autenticacionap-4237h3gqret.ws-us85.gitpod.io/login', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "email": userEmail,
                            "password": userPassword

                        })
                    }).then((response) => {
                        if (response.status === 200) {
                            setStore({
                                auth: true,
                                visually: "visually-hidden",
                                hide: ""
                            })
                        }
                        return response.json()
                    }).then((data) => {
                        localStorage.setItem("token", data.access_token)
                        if (data.msg === "Bad username or password" || data.msg === "User does not exist") {
                            alert(data.msg)
                        }
                        console.log(data);
                    });
                    //
                } catch (e) {
                    console.log(e);
                }
            },
            signup: (email, name, password) => {
                try {
                    fetch('https://3000-carolcg-autenticacionap-4237h3gqret.ws-us85.gitpod.io/signup', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "email": email,
                            "name": name,
                            "password": password
                        })
                    }).then((response) => {
                        if (response.status === 200) {
                            alert("¡Usuario creado con exito!")
                        }
                        return response.json()
                    }).then((data) => {
                        if (data.msg === "User exist in the system") {
                            alert(data.msg)
                        }
                        console.log(data);
                    });
                    //
                } catch (e) {
                    console.log(e);
                }
            },


            changeColor: (item) => {
                let store = getStore()
                if (store.favorites.includes(item)) {
                    return "fa fa-heart text-warning fs-4";
                } else {
                    return "far fa-heart text-warning fs-4"
                }
            }
        }
    };
};

export default getState;