import SecureDashboard from "@/routes/secureDashboard";
import Dashboard from "../components/dashboard/dashboard";


export default function dashboard() {
    return (
        <main className="">
            <div className="">
                <div>
                    <SecureDashboard>
                        <Dashboard />
                    </SecureDashboard>
                </div>
            </div>
        </main>
    );
};
