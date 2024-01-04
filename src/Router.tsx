import UserAppShell from 'layouts/UserAppShell'
import Home from 'pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<UserAppShell />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
