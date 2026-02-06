import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import CategoryBar from "@/components/CategoryBar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const success = await login(formData.email, formData.password);
        if (success) {
          toast.success("Login successful!");
          navigate("/");
        } else {
          toast.error("Invalid email or password");
        }
      } else {
        if (formData.password !== formData.confirmPassword) {
          toast.error("Passwords do not match");
          setLoading(false);
          return;
        }
        if (formData.password.length < 6) {
          toast.error("Password must be at least 6 characters");
          setLoading(false);
          return;
        }
        const success = await register(formData.name, formData.email, formData.password);
        if (success) {
          toast.success("Registration successful!");
          navigate("/");
        } else {
          toast.error("Email already registered");
        }
      }
    } catch {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <CategoryBar />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h1 className="font-display text-4xl text-center mb-8">
              {isLogin ? "Login" : "Register"}
            </h1>

            <div className="bg-card p-8 border border-border">
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="block text-sm mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-input"
                      required
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="contact-input"
                    required
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label className="block text-sm mb-2">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="contact-input"
                      required
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full btn-submit"
                  disabled={loading}
                >
                  {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-primary hover:underline"
                  >
                    {isLogin ? "Register" : "Login"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Auth;
