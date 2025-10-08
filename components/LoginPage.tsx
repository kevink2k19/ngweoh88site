import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import {
  Eye,
  EyeOff,
  Crown,
  Facebook,
  Mail,
  ArrowLeft,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { getTranslation } from "../data/translations.js";

interface LoginPageProps {
  onPageChange: (page: string) => void;
  language?: string;
}

export function LoginPage({
  onPageChange,
  language = "en",
}: LoginPageProps) {
  const t = (key: string) => getTranslation(key, language);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
    
    // Simulate successful login and redirect to home
    // In a real app, you would validate credentials first
    setTimeout(() => {
      onPageChange("home");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 flex items-center justify-center p-4">
      {/* Back to Home Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onPageChange("home")}
        className="fixed top-4 left-4 z-10 flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        {t("home")}
      </Button>
      
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex flex-col justify-center space-y-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Crown className="h-12 w-12 text-primary" />
              <span className="text-4xl font-bold text-primary">
                Royal Casino
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Welcome Back to the Kingdom
            </h2>
            <p className="text-muted-foreground text-lg">
              Continue your royal gaming adventure with
              exclusive bonuses and premium games waiting for
              you.
            </p>
          </div>

          <div className="relative h-64 rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1642148109750-18d2c59ec0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBsdXh1cnklMjBnb2xkZW4lMjBjaGlwc3xlbnwxfHx8fDE3NTc3NDI4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Casino atmosphere"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="lg:hidden flex items-center justify-center gap-2 mb-4">
                <Crown className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-primary">
                  NgweOh88
                </span>
              </div>
              <CardTitle className="text-2xl">
                {t("welcomeBack")}
              </CardTitle>
              <p className="text-muted-foreground">
                {t("signInToAccount")}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form
                onSubmit={handleLogin}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="username">
                    {t("username")}
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder={t("username")}
                    value={formData.username}
                    onChange={(e) =>
                      handleInputChange(
                        "username",
                        e.target.value,
                      )
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">
                    {t("password")}
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder={t("createPassword")}
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange(
                          "password",
                          e.target.value,
                        )
                      }
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      className="rounded"
                    />
                    {t("rememberMe")}
                  </label>
                  <button
                    type="button"
                    className="text-sm text-primary hover:underline"
                  >
                    {t("forgotPassword")}
                  </button>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                >
                  {t("signIn")}
                </Button>
              </form>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  {t("dontHaveAccount")}{" "}
                  <button
                    onClick={() => onPageChange("register")}
                    className="text-primary hover:underline font-medium"
                  >
                    {t("createAccount")}
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}