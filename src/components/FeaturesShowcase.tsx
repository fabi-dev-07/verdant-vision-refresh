import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Shield, 
  Globe, 
  Smartphone, 
  BarChart3, 
  Lock,
  Zap,
  RefreshCw,
  CloudLightning
} from "lucide-react"

const FeaturesShowcase = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms that continuously optimize your operations",
      color: "from-primary to-secondary"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance",
      color: "from-secondary to-accent1"
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Deploy across multiple locations with centralized monitoring",
      color: "from-accent1 to-accent2"
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Access your digital twins from anywhere with responsive design",
      color: "from-primary to-accent1"
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Interactive visualizations that update in real-time",
      color: "from-secondary to-primary"
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "GDPR compliant with advanced data protection measures",
      color: "from-accent1 to-secondary"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second response times with edge computing architecture",
      color: "from-primary to-accent2"
    },
    {
      icon: RefreshCw,
      title: "Auto Updates",
      description: "Seamless updates with zero downtime deployment",
      color: "from-secondary to-accent2"
    },
    {
      icon: CloudLightning,
      title: "Cloud Native",
      description: "Built for the cloud with auto-scaling capabilities",
      color: "from-accent1 to-primary"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform offers enterprise-grade features designed to meet 
            the demanding requirements of modern digital transformation initiatives
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 group hover:shadow-soft">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesShowcase