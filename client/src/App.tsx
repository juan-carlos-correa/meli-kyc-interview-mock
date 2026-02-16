import { Card, CardHeader, CardTitle, CardContent } from "./components/ui";

function App() {
  return (
    <div className="min-h-screen bg-meli-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          KYC Verification System
        </h1>

        <Card>
          <CardHeader>
            <CardTitle>Welcome to KYC Verification</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-meli-gray-600">
              Please complete the verification process to continue.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
