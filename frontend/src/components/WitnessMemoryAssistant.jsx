import React, { useState } from "react";
import { ChevronRight, ChevronLeft, Brain, Eye, User, Sparkles, CheckCircle2, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Progress } from "./ui/progress";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");

const interviewQuestions = [
  {
    id: "age",
    category: "Basic Features",
    icon: User,
    question: "What was the person's approximate age?",
    type: "radio",
    options: ["Child (under 12)", "Teenager (13-19)", "Young Adult (20-35)", "Middle-aged (36-55)", "Senior (56+)"],
  },
  {
    id: "gender",
    category: "Basic Features",
    icon: User,
    question: "What was the person's gender?",
    type: "radio",
    options: ["Male", "Female", "Other/Uncertain"],
  },
  {
    id: "ethnicity",
    category: "Basic Features",
    icon: User,
    question: "What was the person's ethnicity?",
    type: "radio",
    options: ["Caucasian", "African", "South Asian", "East Asian", "Hispanic/Latino", "Middle Eastern", "Mixed/Uncertain"],
  },
  {
    id: "faceShape",
    category: "Facial Features",
    icon: Eye,
    question: "What was the shape of their face?",
    type: "radio",
    options: ["Oval", "Round", "Square", "Heart", "Diamond", "Long/Rectangular", "Triangular"],
  },
  {
    id: "skinTone",
    category: "Facial Features",
    icon: Eye,
    question: "What was their skin tone?",
    type: "radio",
    options: ["Very Fair", "Fair", "Medium/Olive", "Tan", "Brown", "Dark"],
  },
  {
    id: "hair",
    category: "Hair Details",
    icon: User,
    question: "Describe their hair type and color:",
    type: "text",
    placeholder: "Example: Short black curly hair, balding with gray sides...",
  },
  {
    id: "scars",
    category: "Distinguishing Marks",
    icon: Eye,
    question: "Did they have any scars, marks, or tattoos?",
    type: "text",
    placeholder: "Example: Scar under right eye, birthmark on cheek, tattoo on neck...",
  },
  {
    id: "accessories",
    category: "Accessories",
    icon: User,
    question: "Did they wear any accessories?",
    type: "text",
    placeholder: "Example: Glasses, earrings, hat, necklace, watch...",
  },
  {
    id: "expression",
    category: "Expression",
    icon: Brain,
    question: "What was their facial expression?",
    type: "radio",
    options: ["Neutral", "Smiling", "Serious/Stern", "Angry", "Worried/Scared", "Surprised"],
  },
  {
    id: "confidence",
    category: "Witness Assessment",
    icon: Brain,
    question: "How confident are you in these details? (0-100%)",
    type: "slider",
    min: 0,
    max: 100,
    step: 5,
  },
];

const WitnessMemoryAssistant = ({ isOpen, onClose, onPromptGenerated, isGenerating, setIsGenerating }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    age: "",
    gender: "",
    faceShape: "",
    hair: "",
    skinTone: "",
    scars: "",
    accessories: "",
    expression: "",
    ethnicity: "",
    confidence: 80,
  });

  const currentQuestion = interviewQuestions[currentStep];
  const progress = ((currentStep + 1) / interviewQuestions.length) * 100;

  const handleAnswer = (value) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNext = () => {
    if (currentStep < interviewQuestions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      generatePrompt();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const generatePrompt = async () => {
    setIsGenerating(true);
    
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const promptText = `Create a detailed forensic AI image generation prompt using the following witness memory:

Age: ${answers.age}
Gender: ${answers.gender}
Face shape: ${answers.faceShape}
Hair: ${answers.hair}
Skin tone: ${answers.skinTone}
Scars/Marks: ${answers.scars || "None noted"}
Accessories: ${answers.accessories || "None noted"}
Expression: ${answers.expression}
Ethnicity: ${answers.ethnicity}
Witness confidence: ${answers.confidence}%

Make the description realistic, structured, and suitable for AI-based suspect sketch generation. Focus on facial features, proportions, and distinguishing characteristics. Format it as a single detailed paragraph suitable for an AI image generator.`;

      const result = await model.generateContent(promptText);
      const generatedPrompt = result.response.text();
      
      onPromptGenerated(generatedPrompt);
    } catch (error) {
      console.error("Error generating prompt:", error);
      // Fallback prompt if API fails
      const fallbackPrompt = `Forensic sketch: ${answers.age} ${answers.ethnicity} ${answers.gender}, ${answers.faceShape} face, ${answers.skinTone} skin tone, ${answers.hair}. Expression: ${answers.expression}. ${answers.scars ? `Distinguishing marks: ${answers.scars}.` : ""} ${answers.accessories ? `Wearing: ${answers.accessories}.` : ""} Witness confidence: ${answers.confidence}%.`;
      onPromptGenerated(fallbackPrompt);
    } finally {
      setIsGenerating(false);
    }
  };

  const isCurrentQuestionAnswered = () => {
    const answer = answers[currentQuestion.id];
    if (currentQuestion.type === "slider") return true;
    return answer && answer.trim && answer.trim() !== "";
  };

  const Icon = currentQuestion.icon;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with stronger blur */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-xl"
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <Card className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 border-white/20 shadow-2xl">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors z-10"
      >
        <X className="w-5 h-5" />
      </button>

      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-purple-500/20">
            <Icon className="w-5 h-5 text-purple-400" />
          </div>
          <span className="text-sm text-purple-400 font-medium">
            {currentQuestion.category}
          </span>
        </div>
        <CardTitle className="text-white text-lg">
          {currentQuestion.question}
        </CardTitle>
        <CardDescription className="text-white/60">
          Question {currentStep + 1} of {interviewQuestions.length}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Progress value={progress} className="h-2 bg-white/10" />
        
        <div className="min-h-[120px]">
          {currentQuestion.type === "radio" && (
            <RadioGroup
              value={answers[currentQuestion.id]}
              onValueChange={handleAnswer}
              className="grid grid-cols-1 gap-3"
            >
              {currentQuestion.options.map((option) => (
                <div
                  key={option}
                  className={`flex items-center space-x-3 rounded-lg border p-4 cursor-pointer transition-all ${
                    answers[currentQuestion.id] === option
                      ? "border-purple-500 bg-purple-500/10"
                      : "border-white/10 hover:border-white/30"
                  }`}
                  onClick={() => handleAnswer(option)}
                >
                  <RadioGroupItem
                    value={option}
                    id={option}
                    className="border-white/30"
                  />
                  <Label
                    htmlFor={option}
                    className="flex-1 cursor-pointer text-white"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}

          {currentQuestion.type === "text" && (
            <Textarea
              value={answers[currentQuestion.id]}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder={currentQuestion.placeholder}
              className="w-full h-24 bg-black/40 border-white/20 rounded-xl p-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-400 resize-none"
            />
          )}

          {currentQuestion.type === "slider" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Not confident</span>
                <span className="text-purple-400 font-bold text-2xl">
                  {answers.confidence}%
                </span>
                <span className="text-white/60 text-sm">Very confident</span>
              </div>
              <input
                type="range"
                min={currentQuestion.min}
                max={currentQuestion.max}
                step={currentQuestion.step}
                value={answers.confidence}
                onChange={(e) => handleAnswer(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <div className="flex justify-center gap-2 pt-2">
                {answers.confidence >= 80 ? (
                  <span className="text-green-400 text-sm flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    High confidence
                  </span>
                ) : answers.confidence >= 50 ? (
                  <span className="text-yellow-400 text-sm">Moderate confidence</span>
                ) : (
                  <span className="text-red-400 text-sm">Low confidence - details may be unreliable</span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0 || isGenerating}
            className="border-white/20 text-white hover:bg-white/10"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={!isCurrentQuestionAnswered() || isGenerating}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90"
          >
            {isGenerating ? (
              <>
                <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : currentStep === interviewQuestions.length - 1 ? (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Prompt
              </>
            ) : (
              <>
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
    </div>
  );
};

export default WitnessMemoryAssistant;
