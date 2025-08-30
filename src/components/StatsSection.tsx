import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { TrendingUp, Users, Award, Zap } from "lucide-react"

const StatsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent1/5">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Results
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our digital twin solutions deliver measurable impact across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: TrendingUp, number: 85, suffix: "%", label: "Efficiency Improvement", delay: 0.2 },
            { icon: Users, number: 500, suffix: "+", label: "Global Clients", delay: 0.4 },
            { icon: Award, number: 50, suffix: "+", label: "Industry Awards", delay: 0.6 },
            { icon: Zap, number: 99.9, suffix: "%", label: "System Uptime", delay: 0.8 }
          ].map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              delay={stat.delay}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const StatCard = ({ icon: Icon, number, suffix, label, delay, inView }: {
  icon: any
  number: number
  suffix: string
  label: string
  delay: number
  inView: boolean
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const increment = number / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= number) {
          setCount(number)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [inView, number])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center group"
    >
      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-4xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground font-medium">
        {label}
      </div>
    </motion.div>
  )
}

export default StatsSection