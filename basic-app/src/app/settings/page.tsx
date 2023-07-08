import SecureSettings from "@/routes/secureSettings";
import Settings from "../components/settings/settings";

export default function settings() {
    return (
        <main className="">
            <div className="">
                <div>
                    <SecureSettings />
                </div>
            </div>
        </main>
    );
};
