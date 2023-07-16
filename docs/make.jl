push!(LOAD_PATH,"../src/")

using RemoteSensingToolbox
using Documenter

DocMeta.setdocmeta!(RemoteSensingToolbox, :DocTestSetup, :(using RemoteSensingToolbox); recursive=true)

makedocs(;
    modules=[RemoteSensingToolbox, RemoteSensingToolbox.Bandsets], #RemoteSensingToolbox.Spectral, RemoteSensingToolbox.Transformations],
    authors="Joshua Billson",
    repo="https://github.com/JoshuaBillson/RemoteSensingToolbox.jl/blob/{commit}{path}#{line}",
    sitename="RemoteSensingToolbox.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://JoshuaBillson.github.io/RemoteSensingToolbox.jl",
        edit_link="main",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
        "Examples" => [
            "Quick Start" => "quickstart.md", 
            #"Preprocessing" => "preprocessing_example.md", 
            "Spectral Analysis" => "spectral_example.md", 
        ], 
    ],
)

deploydocs(;
    repo="github.com/JoshuaBillson/RemoteSensingToolbox.jl",
    devbranch="main",
)
