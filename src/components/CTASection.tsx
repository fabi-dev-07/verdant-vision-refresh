import { Button } from "@/components/ui/enhanced-button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles, Users, Calendar } from "lucide-react"

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white/15 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Re-imagining the Future</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to build your{" "}
            <span className="text-accent-light">
              Smart Operations
            </span>
            <br />
            of the future?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's co-create your digital journey and unlock operational efficiency, 
            real-time automation, and next-level business growth.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="accent" size="xl" className="group bg-white text-primary hover:bg-white/90">
            <Calendar className="w-5 h-5" />
            Book a Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="ghost" size="xl" className="border border-white/30 text-white hover:bg-white/10">
            <Users className="w-5 h-5" />
            Explore Our Capabilities
          </Button>
          
          <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
            Get Your Digital Twin Innovation Update
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Predict disruptions before they happen</h3>
              <p className="text-white/80 text-sm">
                AI-powered predictive analytics for proactive decision making
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Automate complex processes and reduce costs</h3>
              <p className="text-white/80 text-sm">
                Streamline operations with intelligent automation
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Scale AI-driven decision making across your enterprise</h3>
              <p className="text-white/80 text-sm">
                Enterprise-wide digital transformation solutions
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default CTASection