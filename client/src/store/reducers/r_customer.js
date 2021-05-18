const initialState = {
    customers: [
        {
            email: "customer@email.com",
            nama_lengkap: "Fang Yuan",
            nomor_telpon: "088777666555",
            alamat: "Gue Yue Village, Southern Continent"
        },
        {
            email: "customer1@email.com",
            nama_lengkap: "Bai Ning Bing",
            nomor_telpon: "087666555444",
            alamat: "Bai Village, Southern Continent"
        },
        {
            email: "customer2@email.com",
            nama_lengkap: "Nie Lie",
            nomor_telpon: "088777666555",
            alamat: "Nie Village, Glory City"
        }
    ]
}

const r_customer = (state = initialState, action) => {
    switch (action.type) {
        case "fetch":
            return state
        default:
            return state
    }
}

export default r_customer