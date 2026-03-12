"use client"

import Image from "next/image"
import { Phone, MapPin, Globe, CheckCircle, Zap, Shield, Award, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("get-in-touch")
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const openWhatsApp = () => {
    const phoneNumber = "00862154385286"
    const message =
      "Hello! I'm interested in our Mining Screen Mesh products and would like to learn more about your solutions."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/logo.jpg"
                alt="HWZ Industrial Technology Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-8">
                <a href="#about" className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  About
                </a>
                <a href="#products" className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  Products
                </a>
                <a href="#process" className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  Process
                </a>
                <a href="#contact" className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  Contact
                </a>
              </nav>
              <div className="flex items-center space-x-2 text-right">
                <Mail className="h-5 w-5 text-cyan-500" />
                <div>
                  <div className="text-sm text-slate-600 font-semibold">Customer Service</div>
                  <div className="text-lg font-bold text-cyan-600">contact@biditech.cn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/wire-mesh-hero.png"
            alt="High-Quality Industrial Wire Mesh - HWZ Technology Premium Screening Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Mining Mesh
            <span className="block text-cyan-400">Expert</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-slate-200">
            Leading Technology, Quality First for Australia
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            Discover Our Solutions
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>HWZ Industrial Technology</strong> is a leading provider of advanced mining screens, industrial
                machinery, and automation solutions, proudly serving the Australian mining and construction sectors. Our
                company, with over 5,000 square meters of production space and state-of-the-art equipment, is committed
                to delivering products that meet the highest quality standards.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We specialise in welded screens, woven screens, polypropylene screens, and a wide range of mining
                machinery. Our dedicated export team has established long-term partnerships with clients in Australia,
                Southeast Asia, and Africa.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-700 mb-2">5000+</div>
                  <div className="text-gray-600">m² Production Area</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-700 mb-2">16+</div>
                  <div className="text-gray-600">Core Products</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/company-building.png"
                alt="HWZ Industrial Technology Modern Facility"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Screens Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Screens</h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-lg shadow-xl">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Superior Quality</h3>
                    <p className="text-slate-200">
                      Automated welding, long service life, excellent wear resistance, high load capacity, and never
                      delaminates under long-term alternating loads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-8 w-8 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Versatile Applications</h3>
                    <p className="text-slate-200">
                      Wide range of applications, highly specialised, suitable for any type of vibrating screen and can
                      be custom-made.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Award className="h-8 w-8 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Economic Benefits</h3>
                    <p className="text-slate-200">
                      Robotic welding ensures stable parameters, self-cleaning screen surface, no clogging or
                      deformation, and high screening efficiency. Significant economic benefits: low total cost, fast
                      delivery, and minimal maintenance or replacement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/images/premium-screens-robot.png"
                alt="Advanced Robotic Welding System - Premium Screen Production Facility"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Robotic Welding Process */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Screen Production Process</h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-slate-700">Robotic Welding </span>
              <span className="text-2xl font-bold text-cyan-600">Advantages</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/images/screen-process-hexagon.png"
                alt="Six-Step Screen Production Process with Product Samples"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Zap className="h-8 w-8 text-cyan-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Automated Machinery</h3>
                  <p className="text-gray-600 text-sm">
                    Robotic welding ensures clear production cycles and easy control of output. The fixed production
                    rhythm maximises efficiency and resource utilisation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-cyan-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Increased Productivity</h3>
                  <p className="text-gray-600 text-sm">
                    Robotic welding is fast and responsive, with speeds far exceeding manual welding. Robots operate
                    continuously without breaks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-cyan-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Improved Environment</h3>
                  <p className="text-gray-600 text-sm">
                    Robotic welding improves working conditions and can operate in environments unsuitable for humans.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Award className="h-8 w-8 text-cyan-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Enhanced Quality</h3>
                  <p className="text-gray-600 text-sm">
                    Robotic welding maintains stable performance throughout the process, minimising human error and
                    skill requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Screen Series */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-cyan-600">HWZ</span> Screen Series
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Anti-Clogging Screen", image: "/images/anti-clogging-screen.png" },
              { name: "Dewatering Screen", image: "/images/dewatering-screen.png" },
              { name: "Welded Screen", image: "/images/welded-screen.png" },
              { name: "Woven Wire Screen", image: "/images/woven-wire-screen.png" },
              { name: "Perforated Plate Screen", image: "/images/perforated-plate-screen.png" },
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="bg-gray-100 rounded-t-lg overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-center">{product.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sand Production Line Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-cyan-600">Sand Production Line</span>
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete integrated sand production solution with advanced crushing, screening, and recovery technology
            </p>
          </div>

          {/* Production Line Flow Chart */}
          <div className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Image
                src="/images/sand-production-flow-complete.png"
                alt="Complete Sand Production Line Process Flow - From Raw Materials to Finished Sand"
                width={1400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Process Features</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    1
                  </div>
                  <p className="text-gray-700">
                    <strong>Fine Sand Recovery Device:</strong> Advanced recovery system ensures minimal sand loss and
                    maximum efficiency
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    2
                  </div>
                  <p className="text-gray-700">
                    <strong>Reasonable grading of finished sand:</strong> Flexible fineness adjustment to meet various
                    construction requirements
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    3
                  </div>
                  <p className="text-gray-700">
                    <strong>Premium quality standards:</strong> All finished sand indicators meet national standards,
                    making it a premium concrete aggregate
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    4
                  </div>
                  <p className="text-gray-700">
                    <strong>Economic efficiency:</strong> Low production cost and high efficiency of finished sand
                    production
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-6">Production Line Advantages</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Zap className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">High Automation</h4>
                    <p className="text-slate-200 text-sm">
                      Fully automated production line with minimal manual intervention
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Environmental Protection</h4>
                    <p className="text-slate-200 text-sm">
                      Dust suppression and noise reduction systems for eco-friendly operation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Flexible Configuration</h4>
                    <p className="text-slate-200 text-sm">
                      Customizable equipment configuration based on specific requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-cyan-600">HWZ</span> Machinery Product Series
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Spiral Sand Washer", image: "/images/spiral-sand-washer.png" },
              { name: "Wheel Sand Washer", image: "/images/wheel-sand-washer.png" },
              { name: "Fine Sand Recovery Device", image: "/images/fine-sand-recovery-device.png" },
              { name: "Vibrating Feeder", image: "/images/vibrating-feeder.png" },
              { name: "Circular Vibrating Screen", image: "/images/circular-vibrating-screen.png" },
              { name: "Jaw Crusher", image: "/images/jaw-crusher.png" },
              {
                name: "Multi-cylinder Hydraulic Cone Crusher",
                image: "/images/multi-cylinder-hydraulic-cone-crusher.png",
              },
              { name: "Impact Crusher", image: "/images/impact-crusher.png" },
              { name: "Mobile Jaw Crushing Station", image: "/images/mobile-jaw-crushing-station.png" },
              { name: "Mobile Cone Crushing Station", image: "/images/mobile-cone-crushing-station.png" },
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="bg-gray-100 rounded-t-lg overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-center">{product.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">We Are Here Waiting for You</h2>
              <div className="w-16 h-1 bg-cyan-400 mb-8"></div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-200">
                    Minhang, Shanghai
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-cyan-400" />
                  <span className="text-lg text-slate-200">Phone: 0086-21-54385286</span>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-cyan-400" />
                  <span className="text-lg text-slate-200">Email: contact@biditech.cn</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-lg shadow-xl">
              <Image
                src="/images/company-location-map.png"
                alt="HWZ Industrial Technology Location Map - Binzhou, Shandong"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Section */}
      <section id="get-in-touch" className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with us through multiple channels for quick and efficient communication
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
                <Image
                  src="/images/whatsapp-qr.png"
                  alt="WhatsApp QR Code - Contact HWZ Industrial Technology"
                  width={250}
                  height={250}
                  className="w-60 h-60 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Scan QR Code</h3>
              <p className="text-gray-600">Quick access via WhatsApp</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">Instant messaging and voice calls</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Scan the QR code or search for our WhatsApp Business account for immediate assistance with product
                  inquiries, technical support, and order information.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-cyan-500 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">Professional business communication</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  Send us detailed inquiries, technical specifications, or business proposals via email.
                </p>
                <a
                  href="mailto:contact@biditech.cn"
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  contact@biditech.cn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
          aria-label="Contact us on WhatsApp"
        >
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
          </svg>
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="/images/logo.jpg"
                alt="Biditech - Mining Screen Mesh Expert"
                width={200}
                height={80}
                className="h-16 w-auto mx-auto"
              />
            </div>
            <p className="text-gray-400">© 2022-2025 Biditech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
