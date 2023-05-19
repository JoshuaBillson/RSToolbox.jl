var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = RSToolbox","category":"page"},{"location":"#RSToolbox","page":"Home","title":"RSToolbox","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for RSToolbox.","category":"page"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Sensors","page":"Home","title":"Sensors","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Sensors are julia structs that wrap a typical Rasters.RasterStack object to provide compatability with many RSToolbox algorithms and methods.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The following methods are supported by all AbstractSensor types:","category":"page"},{"location":"","page":"Home","title":"Home","text":" \nBase.getindex return the layer correspinding to the given band name.\nBase.length return the number of layers in the enclosed Rasters.RasterStack.\nBase.map apply a function to each layer in the enclosed Rasters.RasterStack.\nBase.write write layers to file.\nRasters.resample resample data to a different size and projection, or snap to another object.\nRasters.crop shrink objects to specific dimension sizes or the extent of another object.\nRasters.extend extend objects to specific dimension sizes or the extent of another object.\nRasters.trim trims areas of missing values for arrays and across stack layers.\nRasters.mask mask an object by a polygon or Raster along X/Y, or other dimensions.\nRasters.replace_missing replace all missing values in an object and update missingval.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Additionally, asraster can be used to apply a function to the enclosed Rasters.RasterStack.","category":"page"},{"location":"","page":"Home","title":"Home","text":"RSToolbox.AbstractSensor\nLandsat8\nLandsat7\nSentinel2A\nred\ngreen\nblue\nnir\nswir1\nswir2\ndn_to_reflectance\nasraster","category":"page"},{"location":"#RSToolbox.Sensors.AbstractSensor","page":"Home","title":"RSToolbox.Sensors.AbstractSensor","text":"The supertype of all sensor types. \n\nSubtypes should wrap a RasterStack under the field 'stack' and implement the following interface:\n\nblue(X::Sensor)\n\ngreen(X::Sensor)\n\nred(X::Sensor) \n\nnir(X::Sensor) \n\nswir1(X::Sensor)\n\nswir2(X::Sensor)\n\ndn2rs(::Type{<:AbstractSensor})\n\nBandSet(::Type{Landsat8})\n\nExample Implementation\n\nstruct Landsat8 <: AbstractSensor\n    stack::RasterStack\nend\n\nfunction BandSet(::Type{Landsat8})\n    bands = [:B1, :B2, :B3, :B4, :B5, :B6, :B7]\n    wavelengths = [440, 480, 560, 655, 865, 1610, 2200]\n    return BandSet(bands, wavelengths)\nend\n    \nblue(X::Landsat8) = X[:B2]\n\ngreen(X::Landsat8) = X[:B3]\n\nred(X::Landsat8) = X[:B4]\n\nnir(X::Landsat8) = X[:B5]\n\nswir1(X::Landsat8) = X[:B6]\n\nswir2(X::Landsat8) = X[:B7]\n\ndn2rs(::Type{Landsat8}) = (scale=0.0000275, offset=-0.2)\n\n\n\n\n\n","category":"type"},{"location":"#RSToolbox.Sensors.Landsat8","page":"Home","title":"RSToolbox.Sensors.Landsat8","text":"stack::Rasters.RasterStack\n\nImplements the AbstractSensor interface for Landsat 8.\n\n\n\n\n\n","category":"type"},{"location":"#RSToolbox.Sensors.Landsat7","page":"Home","title":"RSToolbox.Sensors.Landsat7","text":"stack::Rasters.RasterStack\n\nImplements the AbstractSensor interface for Landsat 7.\n\n\n\n\n\n","category":"type"},{"location":"#RSToolbox.Sensors.Sentinel2A","page":"Home","title":"RSToolbox.Sensors.Sentinel2A","text":"stack::Rasters.RasterStack\n\nImplements the AbstractSensor interface for Sentinel-2A.\n\n\n\n\n\n","category":"type"},{"location":"#RSToolbox.Sensors.red","page":"Home","title":"RSToolbox.Sensors.red","text":"red(X::AbstractSensor)\n\nReturn the red band for the given sensor.\n\n\n\n\n\n","category":"function"},{"location":"#RSToolbox.Sensors.green","page":"Home","title":"RSToolbox.Sensors.green","text":"green(X::AbstractSensor)\n\nReturn the green band for the given sensor.\n\n\n\n\n\n","category":"function"},{"location":"#RSToolbox.Sensors.blue","page":"Home","title":"RSToolbox.Sensors.blue","text":"blue(X::AbstractSensor)\n\nReturn the blue band for the given sensor.\n\n\n\n\n\n","category":"function"},{"location":"#RSToolbox.Sensors.nir","page":"Home","title":"RSToolbox.Sensors.nir","text":"nir(X::AbstractSensor)\n\nReturn the nir band for the given sensor.\n\n\n\n\n\n","category":"function"},{"location":"#RSToolbox.Sensors.swir1","page":"Home","title":"RSToolbox.Sensors.swir1","text":"swir1(X::AbstractSensor)\n\nReturn the swir1 band for the given sensor.\n\n\n\n\n\n","category":"function"},{"location":"#RSToolbox.Sensors.swir2","page":"Home","title":"RSToolbox.Sensors.swir2","text":"swir2(X::AbstractSensor)\n\nReturn the swir2 band for the given sensor.\n\n\n\n\n\n","category":"function"},{"location":"#RSToolbox.Sensors.dn_to_reflectance","page":"Home","title":"RSToolbox.Sensors.dn_to_reflectance","text":"dn_to_reflectance(X::AbstractSensor)\n\nTransform the raster from Digital Numbers (DN) to reflectance.\n\n\n\n\n\n","category":"function"},{"location":"#RSToolbox.Sensors.asraster","page":"Home","title":"RSToolbox.Sensors.asraster","text":"asraster(f, X::AbstractSensor)\n\nOperate on the AbstractSensor as if it was a regular Rasters.RasterStack.\n\nExample\n\nlandsat = Landsat8(\"LC08_L2SP_043024_20200802_20200914_02_T1/\")\nasraster(landsat) do stack\n    map(x -> x .* 0.0001f0, stack)\nend\n\n\n\n\n\n","category":"function"},{"location":"#Visualization","page":"Home","title":"Visualization","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"visualize\nTrueColor\nColorInfrared\nSWIR\nAgriculture\nGeology","category":"page"},{"location":"#RSToolbox.visualize","page":"Home","title":"RSToolbox.visualize","text":"visualize(r::AbstractRaster, g::AbstractRaster, b::AbstractRaster; lower=0.02, upper=0.98)\nvisualize(g::AbstractRaster; lower=0.02, upper=0.98)\nvisualize(img::AbstractSensor, ::Type{TrueColor}; lower=0.02, upper=0.98)\nvisualize(img::AbstractSensor, ::Type{ColorInfrared}; lower=0.02, upper=0.98)\nvisualize(img::AbstractSensor, ::Type{SWIR}; lower=0.02, upper=0.98)\nvisualize(img::AbstractSensor, ::Type{Agriculture}; lower=0.02, upper=0.98)\nvisualize(img::AbstractSensor, ::Type{Geology}; lower=0.02, upper=0.98)\n\nVisualize a remotely sensed image by applying a histogram stretch. Returns either an RGB or grayscale image compatible with the Images.jl ecosystem.\n\nA number of band combinations are supported for types implementing the AbstractSensor interface.\n\nExample 1\n\nlandsat = Landsat8(\"LC08_L2SP_043024_20200802_20200914_02_T1/\")\nimg = visualize(red(landsat), green(landsat), blue(landsat))\nsave(\"truecolor.png\", img)\n\nExample 2\n\nlandsat = Landsat8(\"LC08_L2SP_043024_20200802_20200914_02_T1/\")\nimg = visualize(landsat, TrueColor)\nsave(\"truecolor.png\", img)\n\n\n\n\n\n","category":"function"},{"location":"#RSToolbox.TrueColor","page":"Home","title":"RSToolbox.TrueColor","text":"True color band composite.\n\n\n\n\n\n","category":"type"},{"location":"#RSToolbox.ColorInfrared","page":"Home","title":"RSToolbox.ColorInfrared","text":"Color infrared band composite.\n\n\n\n\n\n","category":"type"},{"location":"#RSToolbox.SWIR","page":"Home","title":"RSToolbox.SWIR","text":"SWIR band composite.\n\n\n\n\n\n","category":"type"},{"location":"#RSToolbox.Agriculture","page":"Home","title":"RSToolbox.Agriculture","text":"Agriculture band composite.\n\n\n\n\n\n","category":"type"},{"location":"#RSToolbox.Geology","page":"Home","title":"RSToolbox.Geology","text":"Geology band composite.\n\n\n\n\n\n","category":"type"},{"location":"#Land-Cover-Indices","page":"Home","title":"Land Cover Indices","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"mndwi\nndwi\nndvi\nsavi\nndmi\nnbri\nndbi","category":"page"},{"location":"#RSToolbox.Algorithms.mndwi","page":"Home","title":"RSToolbox.Algorithms.mndwi","text":"mndwi(green::AbstractRaster, swir::AbstractRaster)\nmndwi(sensor::AbstractSensor)\n\nCompute the Modified Normalised Difference Water Index (Xu 2006).\n\nMNDWI = (green - swir) / (green + swir)\n\n\n\n\n\n","category":"function"},{"location":"#RSToolbox.Algorithms.ndwi","page":"Home","title":"RSToolbox.Algorithms.ndwi","text":"ndwi(green::AbstractRaster, nir::AbstractRaster)\nndwi(sensor::AbstractSensor)\n\nCompute the Normalized Difference Water Index (McFeeters 1996).\n\nNDWI = (green - nir) / (green + nir)\n\n\n\n\n\n","category":"function"},{"location":"#RSToolbox.Algorithms.ndvi","page":"Home","title":"RSToolbox.Algorithms.ndvi","text":"ndvi(nir::AbstractRaster, red::AbstractRaster)\nndvi(sensor::AbstractSensor)\n\nCompute the Normalized Difference Vegetation Index.\n\nNDVI = (nir - red) / (nir + red)\n\n\n\n\n\n","category":"function"},{"location":"#RSToolbox.Algorithms.savi","page":"Home","title":"RSToolbox.Algorithms.savi","text":"savi(nir::AbstractRaster, red::AbstractRaster; L=0.33)\nsavi(sensor::AbstractSensor; L=0.33)\n\nCompute the Soil Adjusted Vegetation Index (Huete 1988).\n\nSAVI is a vegetation index which attempts to minimize soil brightness influences by introducing a soil-brightness correction factor (L).\n\nL represents the amount of green vegetation cover, which is set to 0.33 by default.\n\nSAVI = ((nir - red) / (nir + red + L)) * (1 + L)\n\n\n\n\n\n","category":"function"},{"location":"#RSToolbox.Algorithms.ndmi","page":"Home","title":"RSToolbox.Algorithms.ndmi","text":"ndmi(nir::AbstractRaster, swir1::AbstractRaster)\nndmi(sensor::AbstractSensor)\n\nCompute the Normalized Difference Moisture Index.\n\nNDMI is sensitive to the moisture levels in vegetation. It is used to monitor droughts and fuel levels in fire-prone areas.\n\nNDMI = (nir - swir1) / (nir + swir1)\n\n\n\n\n\n","category":"function"},{"location":"#RSToolbox.Algorithms.nbri","page":"Home","title":"RSToolbox.Algorithms.nbri","text":"nbri(nir::AbstractRaster, swir2::AbstractRaster)\nnbri(sensor::AbstractSensor)\n\nCompute the Normalized Burn Ratio Index.\n\nNBRI is used to emphasize burned areas.\n\nNBRI = (nir - swir2) / (nir + swir2)\n\n\n\n\n\n","category":"function"},{"location":"#RSToolbox.Algorithms.ndbi","page":"Home","title":"RSToolbox.Algorithms.ndbi","text":"ndbi(swir1::AbstractRaster, nir::AbstractRaster)\nndbi(sensor::AbstractSensor)\n\nCompute the The Normalized Difference Built-up Index\n\nNDBI is used to emphasize urban and built-up areas.\n\nNDBI = (swir1 - nir) / (swir1 + nir)\n\n\n\n\n\n","category":"function"}]
}
