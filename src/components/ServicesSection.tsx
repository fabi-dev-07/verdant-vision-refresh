import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Lightbulb, Wrench, TrendingUp, Shield, Clock, Cpu, Users, BarChart, Zap } from "lucide-react"

const ServicesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  const services = [
    {
      title: "CONSULT",
      subtitle: "Digital Capital Asset Acceleration",
      icon: Lightbulb,
      features: [
        { icon: Users, text: "Industry EXPERTS" },
        { icon: Shield, text: "BUSINESS Case" },
        { icon: BarChart, text: "Use Case ROADMAPS" }
      ]
    },
    {
      title: "BUILD", 
      subtitle: "Create high-impact Solutions",
      icon: Wrench,
      features: [
        { icon: Cpu, text: "Proven EDGE products" },
        { icon: Clock, text: "REAL TIME & PREDICTIVE" },
        { icon: Zap, text: "AUTOMATED Digital Twins" }
      ]
    },
    {
      title: "SCALE",
      subtitle: "Create high-impact Solutions", 
      icon: TrendingUp,
      features: [
        { icon: Shield, text: "End-to-End CYBER SECURITY" },
        { icon: TrendingUp, text: "Enterprise SCALE" },
        { icon: Zap, text: "AUTOMATE Insights" }
      ]
    }
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="relative overflow-hidden group hover:shadow-soft transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm h-full">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon
                      return (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                            <FeatureIcon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-foreground">
                            {feature.text}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </CardContent>
                
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity"></div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection