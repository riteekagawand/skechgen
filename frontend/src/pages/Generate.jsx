import React, { useState } from 'react';
import { Wand2, RotateCcw, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import logo from '../assets/logo.png';

const Generate = () => {
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [skinTone, setSkinTone] = useState('');
  const [hairType, setHairType] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [facialHair, setFacialHair] = useState('');
  const [accessories, setAccessories] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStatus, setGenerationStatus] = useState('');
  const [generatedSketches, setGeneratedSketches] = useState([]);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGenerationStatus('Processing input...');
    
    // Simulate API call with different status messages
    setTimeout(() => {
      setGenerationStatus('Generating candidate sketches...');
    }, 2000);
    
    setTimeout(() => {
      setGenerationStatus('Finalizing results...');
    }, 4000);
    
    setTimeout(() => {
      setIsGenerating(false);
      setGenerationStatus('Generation complete!');
      // Mock generated sketches
      setGeneratedSketches([
        { id: 1, confidence: 0.87, description: 'Primary candidate' },
        { id: 2, confidence: 0.72, description: 'Alternative view' },
        { id: 3, confidence: 0.65, description: 'Profile angle' }
      ]);
    }, 6000);
  };

  const handleClear = () => {
    setDescription('');
    setGender('');
    setAgeGroup('');
    setSkinTone('');
    setHairType('');
    setHairColor('');
    setFacialHair('');
    setAccessories('');
    setGeneratedSketches([]);
    setGenerationStatus('');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/20 rounded-xl p-3 mr-4">
              <Wand2 className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold font-montserrat">AI Sketch Generator</h1>
          </div>
          <p className="text-xl opacity-90 font-montserrat">
            Provide detailed suspect descriptions to generate forensic sketches
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">
              Suspect Description
            </h2>
            
            {/* Main Description */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                Detailed Description *
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="A male in his 30s, short hair, medium build, scar near right eyebrow, wearing glasses."
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-montserrat"
                required
              />
            </div>

            {/* Structured Attributes */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-montserrat"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                  Age Group
                </label>
                <select
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-montserrat"
                >
                  <option value="">Select Age</option>
                  <option value="teen">Teen (13-19)</option>
                  <option value="young-adult">Young Adult (20-29)</option>
                  <option value="adult">Adult (30-49)</option>
                  <option value="middle-aged">Middle-aged (50-64)</option>
                  <option value="senior">Senior (65+)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                  Skin Tone
                </label>
                <select
                  value={skinTone}
                  onChange={(e) => setSkinTone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-montserrat"
                >
                  <option value="">Select Skin Tone</option>
                  <option value="fair">Fair</option>
                  <option value="light">Light</option>
                  <option value="medium">Medium</option>
                  <option value="olive">Olive</option>
                  <option value="tan">Tan</option>
                  <option value="dark">Dark</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                  Hair Type
                </label>
                <select
                  value={hairType}
                  onChange={(e) => setHairType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-montserrat"
                >
                  <option value="">Select Hair Type</option>
                  <option value="short">Short</option>
                  <option value="medium">Medium</option>
                  <option value="long">Long</option>
                  <option value="bald">Bald</option>
                  <option value="receding">Receding</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                  Hair Color
                </label>
                <select
                  value={hairColor}
                  onChange={(e) => setHairColor(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-montserrat"
                >
                  <option value="">Select Hair Color</option>
                  <option value="black">Black</option>
                  <option value="brown">Brown</option>
                  <option value="blonde">Blonde</option>
                  <option value="red">Red</option>
                  <option value="gray">Gray</option>
                  <option value="white">White</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                  Facial Hair
                </label>
                <select
                  value={facialHair}
                  onChange={(e) => setFacialHair(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-montserrat"
                >
                  <option value="">Select Facial Hair</option>
                  <option value="none">None</option>
                  <option value="mustache">Mustache</option>
                  <option value="beard">Beard</option>
                  <option value="goatee">Goatee</option>
                  <option value="stubble">Stubble</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                  Accessories
                </label>
                <select
                  value={accessories}
                  onChange={(e) => setAccessories(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-montserrat"
                >
                  <option value="">Select Accessories</option>
                  <option value="none">None</option>
                  <option value="glasses">Glasses</option>
                  <option value="sunglasses">Sunglasses</option>
                  <option value="hat">Hat</option>
                  <option value="cap">Cap</option>
                  <option value="mask">Mask</option>
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleGenerate}
                disabled={!description.trim() || isGenerating}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold font-montserrat hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-5 h-5 mr-2" />
                    Generate Sketch
                  </>
                )}
              </button>
              
              <button
                onClick={handleClear}
                disabled={isGenerating}
                className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold font-montserrat hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Clear
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">
              Generated Sketches
            </h2>
            
            {/* Status Messages */}
            {isGenerating && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center">
                  <Loader2 className="w-5 h-5 text-blue-600 mr-3 animate-spin" />
                  <span className="text-blue-800 font-medium font-montserrat">
                    {generationStatus}
                  </span>
                </div>
              </div>
            )}

            {generationStatus === 'Generation complete!' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800 font-medium font-montserrat">
                    {generationStatus}
                  </span>
                </div>
              </div>
            )}

            {/* Generated Results */}
            {generatedSketches.length > 0 ? (
              <div className="space-y-4">
                {generatedSketches.map((sketch) => (
                  <div key={sketch.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 font-montserrat">
                        {sketch.description}
                      </h3>
                      <span className="text-sm text-gray-500 font-montserrat">
                        Confidence: {Math.round(sketch.confidence * 100)}%
                      </span>
                    </div>
                    <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <Scale className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                        <p className="font-montserrat">Generated Sketch Placeholder</p>
                        <p className="text-sm">AI-generated image will appear here</p>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium font-montserrat hover:bg-blue-700 transition-colors duration-200">
                        Download
                      </button>
                      <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium font-montserrat hover:bg-gray-300 transition-colors duration-200">
                        Regenerate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Scale className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="text-lg font-montserrat">No sketches generated yet</p>
                <p className="text-sm">Fill in the description and click "Generate Sketch" to begin</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
