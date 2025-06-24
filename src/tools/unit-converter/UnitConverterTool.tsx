
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Calculator } from "lucide-react";
import ToolWrapper from "@/components/ToolWrapper";
import { ToolConfig } from "@/config/tools.config";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UnitConverterToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const unitCategories = {
  length: {
    label: "Length",
    units: {
      meter: 1,
      kilometer: 0.001,
      centimeter: 100,
      millimeter: 1000,
      inch: 39.3701,
      foot: 3.28084,
      yard: 1.09361,
      mile: 0.000621371,
    },
  },
  weight: {
    label: "Weight",
    units: {
      kilogram: 1,
      gram: 1000,
      milligram: 1e6,
      pound: 2.20462,
      ounce: 35.274,
    },
  },
  temperature: {
    label: "Temperature",
    units: {
      celsius: "C",
      fahrenheit: "F",
      kelvin: "K",
    },
  },
};

const UnitConverterTool = ({ tool, isDark, onToggleTheme }: UnitConverterToolProps) => {
  const [category, setCategory] = useState("length");
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("kilometer");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const convertUnits = () => {
    if (!inputValue || isNaN(parseFloat(inputValue))) return;

    if (category === "temperature") {
      const value = parseFloat(inputValue);
      let output = "";
      if (fromUnit === toUnit) output = value.toString();
      else if (fromUnit === "celsius" && toUnit === "fahrenheit")
        output = ((value * 9) / 5 + 32).toFixed(2);
      else if (fromUnit === "fahrenheit" && toUnit === "celsius")
        output = (((value - 32) * 5) / 9).toFixed(2);
      else if (fromUnit === "celsius" && toUnit === "kelvin")
        output = (value + 273.15).toFixed(2);
      else if (fromUnit === "kelvin" && toUnit === "celsius")
        output = (value - 273.15).toFixed(2);
      else if (fromUnit === "fahrenheit" && toUnit === "kelvin")
        output = (((value - 32) * 5) / 9 + 273.15).toFixed(2);
      else if (fromUnit === "kelvin" && toUnit === "fahrenheit")
        output = (((value - 273.15) * 9) / 5 + 32).toFixed(2);
      setResult(output);
    } else {
      const fromFactor = unitCategories[category].units[fromUnit];
      const toFactor = unitCategories[category].units[toUnit];
      const value = parseFloat(inputValue);
      const output = (value / fromFactor) * toFactor;
      setResult(output.toFixed(6).replace(/\.?0+$/, ""));
    }
  };

  const handleCategoryChange = (val: string) => {
    setCategory(val);
    const units = Object.keys(unitCategories[val].units);
    setFromUnit(units[0]);
    setToUnit(units[1] || units[0]);
    setResult("");
  };

  const units = Object.keys(unitCategories[category].units);

  return (
    <>
      <Helmet>
        <title>Free Unit Converter Online – Length, Weight, Temperature | CodeBoost</title>
        <meta
          name="description"
          content="Convert between metric and imperial units instantly. Free online unit converter for length, weight, and temperature. Perfect for students and professionals."
        />
        <meta name="keywords" content="unit converter, metric converter, imperial converter, length converter, weight converter, temperature converter, free tool" />
        <link rel="canonical" href="/tools/unit-converter" />
      </Helmet>

      <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
        <div className="lg:col-span-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Input
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={handleCategoryChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(unitCategories).map(([key, { label }]) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="from-unit">From</Label>
                <Select value={fromUnit} onValueChange={setFromUnit}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    {units.map((unit) => (
                      <SelectItem key={unit} value={unit}>
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="to-unit">To</Label>
                <Select value={toUnit} onValueChange={setToUnit}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    {units.map((unit) => (
                      <SelectItem key={unit} value={unit}>
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="input-value">Value</Label>
                <Input
                  id="input-value"
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter value to convert"
                  className="font-mono"
                />
              </div>

              <Button onClick={convertUnits} className="w-full" disabled={!inputValue}>
                Convert
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Result
              </CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {inputValue} {fromUnit} =
                      </div>
                      <div className="text-2xl font-bold text-green-700 dark:text-green-400">
                        {result} {toUnit}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    Conversion: {fromUnit} → {toUnit}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Enter a value and click Convert to see the result</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </ToolWrapper>
    </>
  );
};

export default UnitConverterTool;
