import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, Truck, Heart, Leaf, TrendingUp, Shield, Zap, Clock } from "lucide-react"

const IndustriesSection = () => {
  const industries = [
    {
      title: "Manufacturing",
      icon: Factory,
      stats: "25% reduction in unplanned maintenance",
      benefits: [
        { icon: TrendingUp, text: "Optimize production flow using real-time AI-driven analytics" },
        { icon: Shield, text: "Enhance equipment reliability" },
        { icon: Clock, text: "Reduce downtime by 30%" }
      ],
      color: "from-primary to-secondary"
    },
    {
      title: "Supply Chain Logistics",
      icon: Truck, 
      stats: "15% through smart-fleet management",
      benefits: [
        { icon: Zap, text: "Optimize supply chain flows" },
        { icon: TrendingUp, text: "Predictive logistics management" },
        { icon: Shield, text: "Real-time visibility across operations" }
      ],
      color: "from-secondary to-accent"
    },
    {
      title: "Healthcare",
      icon: Heart,
      stats: "20% with AI-driven patient flow optimization", 
      benefits: [
        { icon: Shield, text: "Enhanced hospital workflow" },
        { icon: TrendingUp, text: "AI-powered patient monitoring" },
        { icon: Zap, text: "Optimized resource allocation" }
      ],
      color: "from-accent to-accent-light"
    },
    {
      title: "Renewable Energy",
      icon: Leaf,
      stats: "18% with AI-powered simulations",
      benefits: [
        { icon: Zap, text: "Predict equipment failures" },
        { icon: TrendingUp, text: "Optimize energy generation" },
        { icon: Shield, text: "Enhanced grid reliability" }
      ],
      color: "from-primary to-accent"
    }
  ]

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Industry Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Value Delivery Points of{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Digital Twin
            </span>
            <br />
            (Across Industries)
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How Tecosoft Digital Twins Drive Business Impact across Industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            return (
              <Card 
                key={industry.title}
                className="relative overflow-hidden group hover:shadow-primary transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary mb-2">
                    {industry.title}
                  </CardTitle>
                  <div className="text-sm font-semibold text-accent mb-4">
                    {industry.stats}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {industry.benefits.map((benefit, benefitIndex) => {
                      const BenefitIcon = benefit.icon
                      return (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <div className="w-5 h-5 bg-accent/20 rounded-md flex items-center justify-center mt-0.5">
                            <BenefitIcon className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {benefit.text}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </CardContent>
                
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection