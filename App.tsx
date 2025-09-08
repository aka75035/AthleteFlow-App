import { SystemDesignDocument } from "./components/system-design";
import { MobileAppPrototype } from "./components/mobile-app-prototype";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <Tabs defaultValue="prototype" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="prototype">Mobile App Prototype</TabsTrigger>
            <TabsTrigger value="design">System Design</TabsTrigger>
          </TabsList>
          
          <TabsContent value="prototype">
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-2">AthleteFlow Mobile App</h1>
                <p className="text-gray-600">Interactive prototype of the cross-platform mobile application</p>
              </div>
              <div className="flex justify-center">
                <MobileAppPrototype />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="design">
            <SystemDesignDocument />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}