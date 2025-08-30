import { Button } from "@/components/ui/enhanced-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Factory, Cpu, Network, Database } from "lucide-react"
import industryImage from "@/assets/industry-4-illustration.jpg"

const Industry4Section = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Digital Transformation
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Digital Twin Engine - 
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Industry 4.0 Building Blocks
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecosoft's Digital Twin Engine is built on a strong foundation of Industry 4.0 technologies, 
            ensuring real-time intelligence and automation across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Visual Elements */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-soft bg-muted/50 p-8">
              <img 
                src={industryImage} 
                alt="Industry 4.0 Building Blocks"
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Floating badges */}
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-primary text-white">
                  <Factory className="w-4 h-4 mr-1" />
                  INDUSTRY 4.0
                </Badge>
              </div>
              
              <div className="absolute bottom-4 right-4">
                <Badge variant="secondary" className="bg-accent text-foreground">
                  <Network className="w-4 h-4 mr-1" />
                  Connected
                </Badge>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Processing</h3>
                  <p className="text-muted-foreground">
                    Advanced edge computing capabilities for instant data processing and decision making.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Network className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Connected Ecosystem</h3>
                  <p className="text-muted-foreground">
                    Seamlessly integrate with existing systems and IoT devices for comprehensive visibility.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Intelligent Analytics</h3>
                  <p className="text-muted-foreground">
                    AI-powered insights that transform raw data into actionable business intelligence.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="group">
              Explore Our Industry 4.0 Stack
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industry4Section