'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronLeft, Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useFamily } from '../context/FamilyContext'

function FamilyMemberSelector() {
  const {movePrev}=useFamily();
  const [yourAge, setYourAge] = useState('33')
  const [wifeAge, setWifeAge] = useState('31')
  const [sons, setSons] = useState([{ id: '1', age: '' }])
  const [daughters, setDaughters] = useState([{ id: '1', age: '' }])

  const addMember = (type) => {
    const newMember = { id: Date.now().toString(), age: '' }
    if (type === 'son') {
      setSons([...sons, newMember])
    } else {
      setDaughters([...daughters, newMember])
    }
  }

  const removeMember = (type, id) => {
    if (type === 'son') {
      setSons(sons.filter(son => son.id !== id))
    } else {
      setDaughters(daughters.filter(daughter => daughter.id !== id))
    }
  }

  const updateAge = (type, id, age) => {
    if (type === 'son') {
      setSons(sons.map(son => son.id === id ? { ...son, age } : son))
    } else {
      setDaughters(daughters.map(daughter => daughter.id === id ? { ...daughter, age } : daughter))
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" className="mr-2" onClick={movePrev} >
          <ChevronLeft className="h-5 w-5"/>
        </Button>
        <h1 className="text-2xl font-semibold">Select age of covered member(s)</h1>
      </div>

      <div className="space-y-6">
        {/* Your age */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="flex-1">
            <label className="block text-sm mb-1">Your age</label>
            <Select value={yourAge} onValueChange={setYourAge}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select age" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                  <SelectItem key={age} value={age.toString()}>
                    {age} yr
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Wife's age */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="flex-1">
            <label className="block text-sm mb-1">Wife's age</label>
            <Select value={wifeAge} onValueChange={setWifeAge}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select age" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                  <SelectItem key={age} value={age.toString()}>
                    {age} yr
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Sons */}
        <div className="space-y-4">
          {sons.map((son, index) => (
            <div key={son.id} className="flex items-center gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1">Son's age</label>
                <Select value={son.age} onValueChange={(age) => updateAge('son', son.id, age)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select age" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 26 }, (_, i) => i).map((age) => (
                      <SelectItem key={age} value={age.toString()}>
                        {age} yr
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                {sons.length > 1 && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeMember('son', son.id)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                )}
                {index === sons.length - 1 && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => addMember('son')}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Daughters */}
        <div className="space-y-4">
          {daughters.map((daughter, index) => (
            <div key={daughter.id} className="flex items-center gap-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1">Daughter's age</label>
                <Select value={daughter.age} onValueChange={(age) => updateAge('daughter', daughter.id, age)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select age" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 26 }, (_, i) => i).map((age) => (
                      <SelectItem key={age} value={age.toString()}>
                        {age} yr
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                {daughters.length > 1 && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeMember('daughter', daughter.id)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                )}
                {index === daughters.length - 1 && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => addMember('daughter')}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <Button className="w-full bg-black text-white hover:bg-gray-800">
          Continue
        </Button>
      </div>
    </div>
  )
}

export default FamilyMemberSelector
