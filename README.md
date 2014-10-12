# Saltarelle.SourceMapsTest

This is a temporary and internal-use only repository to test Saltarelle's generation of source maps. 

It already embeds Saltarelle 2.6.0.84 branch "source-maps" binaries with latest commits, so do not use nuget to install or update Saltarelle.

The repo requires to manually create a linked directory named "sources" that points to "..\ClassLibrary1", e.g.
```
mklink /D sources ..\ClassLibrary1
```
alternatively you can create the directory "source" and store there all the ".cs" files (preserving its structure). But you'll need to refresh it everytime you modify the sources.

#How to use it

In Visual Studio, choose the project "WebSite" as starting project and choose "index.html" as starting page. Then place some breakpoints on the ".cs" files and run the solution. You should be able to debug it in Visual Studio.  



