# Staylook Base Palette Reference

> Raw color palette values that semantic tokens reference

---

## Palette Structure

Semantic tokens reference base palette values using this format:
`palette/{category}/{value}`

---

## 1. Standard Palette (Grayscale)

The standard palette provides 11 shades from black to white.

| Token | Value | Hex | Usage |
|-------|-------|-----|-------|
| `palette/standard/0` | 0% | `#000000` | Pure black |
| `palette/standard/10` | 10% | `#1A1A1A` | Near black |
| `palette/standard/16` | 16% | `#292929` | Dark gray (dark mode calm) |
| `palette/standard/20` | 20% | `#333333` | Dark gray (dark mode muted) |
| `palette/standard/30` | 30% | `#4D4D4D` | Medium dark gray |
| `palette/standard/40` | 40% | `#666666` | Medium gray |
| `palette/standard/50` | 50% | `#808080` | Mid gray |
| `palette/standard/80` | 80% | `#CCCCCC` | Light gray |
| `palette/standard/92` | 92% | `#EBEBEB` | Very light gray |
| `palette/standard/96` | 96% | `#F5F5F5` | Near white |
| `palette/standard/98` | 98% | `#FAFAFA` | Almost white |
| `palette/standard/100` | 100% | `#FFFFFF` | Pure white |

---

## 2. Expressive Palette (Accent Blue)

The expressive palette provides the primary accent color for highlights.

| Token | Value | Hex | Usage |
|-------|-------|-----|-------|
| `palette/expressive/30` | 30% | `#7EB8FF` | Light accent (dark mode) |
| `palette/expressive/40` | 40% | `#5C9FFF` | Medium accent |
| `palette/expressive/80` | 80% | `#BBDEFB` | Very light accent |
| `palette/expressive/100` | 100% | `#3373CC` | Full accent (light mode) |

---

## 3. Custom Palettes (Semantic Colors)

### Red (Error)
| Token | Value | Hex | Usage |
|-------|-------|-----|-------|
| `palette/custom/red/30` | 30% | `#FF8A80` | Light red (dark mode on) |
| `palette/custom/red/40` | 40% | `#B71C1C` | Dark red |
| `palette/custom/red/50` | 50% | `#EF9A9A` | Medium light red |
| `palette/custom/red/80` | 80% | `#FFCDD2` | Very light red |
| `palette/custom/red/100` | 100% | `#D32F2F` | Full red (light mode on) |

### Green (Success)
| Token | Value | Hex | Usage |
|-------|-------|-----|-------|
| `palette/custom/green/30` | 30% | `#81C784` | Light green (dark mode on) |
| `palette/custom/green/40` | 40% | `#A5D6A7` | Medium light green |
| `palette/custom/green/80` | 80% | `#C8E6C9` | Very light green |
| `palette/custom/green/100` | 100% | `#388E3C` | Full green (light mode on) |

### Yellow (Warning)
| Token | Value | Hex | Usage |
|-------|-------|-----|-------|
| `palette/custom/yellow/30` | 30% | `#FFB74D` | Light orange (dark mode on) |
| `palette/custom/yellow/50` | 50% | `#FFE082` | Medium light orange |
| `palette/custom/yellow/80` | 80% | `#FFECB3` | Very light orange |
| `palette/custom/yellow/100` | 100% | `#F57C00` | Full orange (light mode on) |

### Blue (Info)
| Token | Value | Hex | Usage |
|-------|-------|-----|-------|
| `palette/custom/blue/30` | 30% | `#64B5F6` | Light blue (dark mode on) |
| `palette/custom/blue/50` | 50% | `#90CAF9` | Medium light blue |
| `palette/custom/blue/80` | 80% | `#BBDEFB` | Very light blue |
| `palette/custom/blue/100` | 100% | `#1976D2` | Full blue (light mode on) |

---

## Palette to Semantic Token Mapping

| Semantic Token | Light Mode Palette | Dark Mode Palette |
|----------------|-------------------|-------------------|
| `container/muted` | standard/92 | standard/20 |
| `container/calm` | standard/96 | standard/16 |
| `container/vibrant` | standard/100 | standard/10 |
| `on/standard` | standard/0 | standard/100 |
| `on/expressive` | expressive/100 | expressive/30 |
| `on/error` | custom/red/100 | custom/red/30 |
| `on/success` | custom/green/100 | custom/green/30 |
| `on/warning` | custom/yellow/100 | custom/yellow/30 |
| `on/info` | custom/blue/100 | custom/blue/30 |

---

## CSS Variables

```css
:root {
  /* Standard Palette */
  --palette-standard-0: #000000;
  --palette-standard-10: #1A1A1A;
  --palette-standard-16: #292929;
  --palette-standard-20: #333333;
  --palette-standard-30: #4D4D4D;
  --palette-standard-40: #666666;
  --palette-standard-50: #808080;
  --palette-standard-80: #CCCCCC;
  --palette-standard-92: #EBEBEB;
  --palette-standard-96: #F5F5F5;
  --palette-standard-98: #FAFAFA;
  --palette-standard-100: #FFFFFF;
  
  /* Expressive Palette */
  --palette-expressive-30: #7EB8FF;
  --palette-expressive-40: #5C9FFF;
  --palette-expressive-80: #BBDEFB;
  --palette-expressive-100: #3373CC;
  
  /* Custom Red */
  --palette-red-30: #FF8A80;
  --palette-red-40: #B71C1C;
  --palette-red-50: #EF9A9A;
  --palette-red-80: #FFCDD2;
  --palette-red-100: #D32F2F;
  
  /* Custom Green */
  --palette-green-30: #81C784;
  --palette-green-40: #A5D6A7;
  --palette-green-80: #C8E6C9;
  --palette-green-100: #388E3C;
  
  /* Custom Yellow/Orange */
  --palette-yellow-30: #FFB74D;
  --palette-yellow-50: #FFE082;
  --palette-yellow-80: #FFECB3;
  --palette-yellow-100: #F57C00;
  
  /* Custom Blue */
  --palette-blue-30: #64B5F6;
  --palette-blue-50: #90CAF9;
  --palette-blue-80: #BBDEFB;
  --palette-blue-100: #1976D2;
}
```

---

*Staylook Base Palette — Raw Color Values*
