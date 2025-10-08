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
  Gift,
  Facebook,
  Mail,
  ArrowLeft,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { getTranslation } from "../data/translations.js";

interface RegisterPageProps {
  onPageChange: (page: string) => void;
  language?: string;
}

export function RegisterPage({
  onPageChange,
  language = "en",
}: RegisterPageProps) {
  const t = (key: string) => getTranslation(key, language);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    username: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration attempt:", formData);
    
    // Simulate successful registration and redirect to home
    // In a real app, you would validate and create the account first
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
        {/* Left Side - Welcome Bonus */}
        <div className="hidden lg:flex flex-col justify-center space-y-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Crown className="h-12 w-12 text-primary" />
              <span className="text-4xl font-bold text-primary">
                NgweOh88
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Join the Royal Family
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Create your account and claim your exclusive
              welcome bonus package.
            </p>
          </div>

          {/* Welcome Bonus Card */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-6 text-center space-y-4">
              <Gift className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-xl font-bold text-foreground">
                Welcome Package
              </h3>
              <div className="text-3xl font-bold text-primary">
                100% Match
              </div>
              <div className="text-lg text-foreground">
                Up to $1,000
              </div>
              <p className="text-sm text-muted-foreground">
                Plus 50 Free Spins on selected slots
              </p>
              <div className="pt-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-bold text-primary">
                      500+
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Games
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-primary">
                      24/7
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Support
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-primary">
                      Fast
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Payouts
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Registration Form */}
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
                {t("createAccountTitle")}
              </CardTitle>
              <p className="text-muted-foreground">
                {t("joinPlayers")}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form
                onSubmit={handleRegister}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="fullName">{t("fullName")}</Label>
                  <Input
                    id="fullName"
                    placeholder={t("enterFullName")}
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange(
                        "fullName",
                        e.target.value,
                      )
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t("phoneNumber")}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+95 xxx xxx xxxx"
                    value={formData.phone}
                    onChange={(e) =>
                      handleInputChange("phone", e.target.value)
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username">{t("userName")}</Label>
                  <Input
                    id="username"
                    placeholder={t("chooseUsername")}
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
                  <Label htmlFor="password">{t("password")}</Label>
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

                <div className="space-y-3">
                  <label className="flex items-start gap-2 text-sm">
                    <input
                      type="checkbox"
                      className="rounded mt-0.5"
                      required
                    />
                    <span>
                      {t("agreeToTerms")}{" "}
                      <a
                        href="#"
                        className="text-primary hover:underline"
                      >
                        {t("termsOfService")}
                      </a>{" "}
                      {t("and")}{" "}
                      <a
                        href="#"
                        className="text-primary hover:underline"
                      >
                        {t("privacyPolicy")}
                      </a>
                    </span>
                  </label>
                  <label className="flex items-start gap-2 text-sm">
                    <input
                      type="checkbox"
                      className="rounded mt-0.5"
                      required
                    />
                    <span>
                      {t("confirmAge")}
                    </span>
                  </label>
                  <label className="flex items-start gap-2 text-sm">
                    <input
                      type="checkbox"
                      className="rounded mt-0.5"
                    />
                    <span>
                      {t("receivePromotions")}
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                >
                  {t("createAccountButton")}
                </Button>
              </form>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  {t("alreadyHaveAccount")}{" "}
                  <button
                    onClick={() => onPageChange("login")}
                    className="text-primary hover:underline font-medium"
                  >
                    {t("signInLink")}
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